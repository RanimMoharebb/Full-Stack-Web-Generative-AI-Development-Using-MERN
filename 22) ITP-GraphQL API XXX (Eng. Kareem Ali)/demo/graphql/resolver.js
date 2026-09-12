let books = [
    { title: "A", author: "AA", publishYear: 2010 },
    { title: "B", author: "BB", publishYear: 2015 },
    { title: "C", author: "CC", publishYear: 2020 },
]

module.exports = {
    hello() {
        return {
            text: "Hello Team!",
            views: 1234
        }
    },
    getBooksWithFilters: async ({ filter }) => {
        let filteredBooks = books.filter(b => b.publishYear > filter.minYear && b.publishYear < filter.maxYear)

        return filteredBooks;
    },
    createUser: ({ userInput }) => {
        // save user in database
        return {
            _id: "123",
            name: "Karim Ali",
            email: userInput.email,
            password: userInput.password,
        }
    },
    createBook: ({ bookInput }) => {
        const { title, author, publishYear } = bookInput;

        books.push({
            title,
            author,
            publishYear
        })

        return {
            title,
            author,
            publishYear
        }
    }
}