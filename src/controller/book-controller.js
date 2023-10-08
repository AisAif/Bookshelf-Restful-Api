import { v4 as uuid } from "uuid"
import ResponseError from "../error/response-error.js"
import booksRepository from "../repository/books-repository.js"
import bookValidation from "../validation/book-validation.js"
import validation from "../validation/validation.js"

const create = async (req, res, next) => {
    try {
        const book = validation(bookValidation.create, req.body)
        book.id = uuid().toString()
        book.createdAt = new Date().toISOString()
        book.updatedAt = new Date().toISOString()
        const result = booksRepository.push(book)
        if (result) {
            res.status(200).json({
                status: "success",
                message: "Buku berhasil ditambahkan"
            })
        } else {
            throw new ResponseError(400, "Bad Request")
        }
    } catch (error) {
        next(error)
    }
}

const get = async (req, res, next) => {
    try {
        let id = req.params.bookId
        id = validation(bookValidation.id, id)
        const book = booksRepository.filter((book) => book.id === id)
        if (book.length > 0) {
            res.status(200).json({
                status: "success",
                data: book
            })
        } else {
            res.status(404).json({
                status: "fail",
                message: "Not Found"
            })
        }
    } catch (error) {
        next(error)
    }
}

const getAll = async (req, res, next) => {
    try {
        res.status(200).json({
            status: "success",
            data: booksRepository
        })
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        let id = req.params.bookId
        id = validation(bookValidation.id, id)
        const book = validation(bookValidation.update, req.body)
        const index = booksRepository.findIndex((book) => book.id = id)

        if (index !== -1) {
            book.updatedAt = new Date().toISOString()
            booksRepository[index] = {
              ...booksRepository[index],
              ...book
            }

            res.status(200).json({
                status: "success",
                message: "Buku berhasil diubah"
            })
        } else {
            throw new ResponseError(400, "Bad Request")
        }

    } catch (error) {
        next(error)
    }
}

const remove = async (req, res, next) => {
    try {
        let id = req.params.bookId
        id = validation(bookValidation.id, id)
        const index = booksRepository.findIndex((book) => book.id = id)
        if (index !== -1) {
            booksRepository.splice(index, 1)
            res.status(200).json({
                status: "success",
                message: "Buku berhasil dihapus"
            })
        }
    } catch (error) {
        next(error)
    }
}

export default {
    create,
    get,
    getAll,
    update,
    remove
}