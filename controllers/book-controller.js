const connection = require('../db/config/connection');

const bookController = {
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
    createBook(req, res) {
        connection.query(
            `INSERT INTO books
                (title, author)
            VALUES (
                    ${JSON.stringify(req.body.title)},
                    ${JSON.stringify(req.body.author)}
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
}

module.exports = bookController;