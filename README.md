# Bookshelf Restful API with Hapi

You can access demo server with url: book.ais-aif.my.id


## List routes:
- POST /books
- GET /books
- GET /books/{id}
- PUT /books/{id}
- DELETE /books/{id}

JSON Request Body:
```
{
    name: String,
    year: Int,
    author: String,
    summary: String,
    publisher: String,
    pageCount: Int,
    readPage: Int,
    reading: Bool
}
```
