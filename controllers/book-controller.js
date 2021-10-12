const connection = require('../db/config/connection');

const bookController = {
    // Get all books
    getAllBooks(req, res) {
        connection.query(
            `SELECT * FROM books`,
            (err, req) => {
                if (err) {
                    console.log(err);
                    res.status(500).json(err);
                    return;
                }

                res.json(req);
            }
        );
    },
    // Get one book by id
    getOneBook(req, res) {
        connection.query(
            `SELECT * FROM books WHERE id= ${req.params.bookId}`,
            (err, req) => {
                if (err) {
                    console.log(err);
                    res.status(500).json(err);
                    return;
                }

                res.json(req);
            }
        );
    },
    // Create a book
    createBook(req, res) {
        connection.query(
            `INSERT INTO books
                (title)
            VALUES (
                    ${JSON.stringify(req.body.title)},
                )`,
            (err, req) => {
                if (err) {
                    console.log(err);
                    res.status(500).json(err);
                    return;
                }

                res.json(req);
            }
        );
    },
    // Update a book
    updateBook(req, res) {
        connection.query(
            `UPDATE books
            SET
                title = ${JSON.stringify(req.body.title)},
            WHERE
                id = ${req.params.bookId}`,
            (err, req) => {
                if (err) {
                    console.log(err);
                    res.status(500).json(err);
                    return;
                }

                res.json(req);
            }
        );
    },
    // Delete a book
    deleteBook(req, res) {
        connection.query(
            `DELETE FROM books WHERE id = ${req.params.bookId}`,
            (err, req) => {
                if (err) {
                    console.log(err);
                    res.status(500).json(err);
                    return;
                }

                res.json(req);
            }
        );
    },
}

module.exports = bookController;