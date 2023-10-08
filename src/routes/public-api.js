import express from "express";
import bookController from "../controller/book-controller.js";

const publicApi = new express.Router()

publicApi.post("/books", bookController.create)
publicApi.get("/books", bookController.getAll)
publicApi.get("/books/:bookId", bookController.get)
publicApi.put("/books/:bookId", bookController.update)
publicApi.delete("/books/:bookId", bookController.remove)

export default publicApi