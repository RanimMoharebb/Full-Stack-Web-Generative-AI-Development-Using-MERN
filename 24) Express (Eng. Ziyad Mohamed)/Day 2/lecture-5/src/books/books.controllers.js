import Book from "./books.model.js";

export const getAllBooksController = async (request, response, next) => {
    try {
        const books = await Book.find({ owner: { $exists: false } }).select("-_id");
        return response.status(200).json({ books });
    } catch(error)
    {
        return next(error);
    }
}

export const getMyBooksController = async (request, response, next) => {
    const { userId } = request;
    
    try 
    {
        const myBooks = await Book.find({ owner: userId });
        return response.status(200).json({ myBooks });
    } catch(error)
    {
        return next(error);
    }
}

export const purchaseBookController = async (request, response, next) => {
    const bookId = request.params.id;

    try
    {
        const book = await Book.findById(bookId);

        if (!book)
        {
            return response.status(404).json({ message: "Book not found" });
        }

        if (book.owner)
        {
            return response.status(401).json({ message: "Book is already purchased" });
        }

        book.owner = request.userId;
        await book.save();

        return response.status(200).json({ message: "Book is purchased successfully!" });
    } catch(error)
    {
        return next(error);
    }
}