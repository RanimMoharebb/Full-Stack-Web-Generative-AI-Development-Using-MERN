import mongoose from "mongoose";

const booksSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5
    },
    price: {
        type: Number,
        required: true,
        min: 5
    },
    owner: { type: mongoose.Schema.ObjectId, ref: "User" }
});

const Book = mongoose.model("Book", booksSchema);

export default Book;