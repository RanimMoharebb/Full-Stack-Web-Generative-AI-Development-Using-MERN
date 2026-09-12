import express from "express";
import mongoose from "mongoose";
import usersRouter from "./users/users.router.js";
import booksRouter from "./books/books.router.js";
import { validateAuthToken } from "./middlewares/auth.middlewares.js";
import { errorHandler } from "./middlewares/error.middlewares.js";

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use("/users", usersRouter);
server.use(validateAuthToken);
server.use("/books", booksRouter);

server.use(errorHandler);

try
{
    await mongoose.connect(process.env.DATABASE_CONNECTION_STRING);
    console.log("Connected to database...");

    server.listen(process.env.PORT_NUMBER || 5000);
} catch(error)
{
    console.error(error);
    process.exit();
}
