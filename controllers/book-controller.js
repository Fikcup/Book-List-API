const connection = require('../db/config/connection');

const bookController = {
    // Users can view all books in the database
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
    // Users can search for one book
    getOneBook(req, res) {
        connection.query(
            `SELECT * FROM books WHERE id = ${req.params.bookId}`,
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
    // Admin users can add a book title to the database
    createBook(req, res) {
        connection.query(
            `INSERT INTO books
                (title)
            VALUES (
                    ${JSON.stringify(req.body.title)}
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
    // Admin users can update book titles
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
    // Admin users can delete a book title from the database
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