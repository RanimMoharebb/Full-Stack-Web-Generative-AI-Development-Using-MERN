import express from "express";
import { getAllBooksController, getMyBooksController, purchaseBookController } from "./books.controllers.js";

const router = express.Router();

router.get("/", getAllBooksController);
router.get("/me", getMyBooksController);
router.post("/:id/purchase", purchaseBookController);

export default router;