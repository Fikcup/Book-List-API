const connection = require('../db/config/connection');

const bookAuthorController = {
    // Users can view all book information in the database
    getAllBookInfo(req, res) {
        connection.query(
            `SELECT * FROM bookandauthor`,
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
    // Users can search and find one book's information
    getOneBookInfo(req, res) {
        connection.query(
            `SELECT * FROM bookandauthor WHERE id = ${req.params.bookinfoId}`,
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
    // Admin users can add book info
    createBookInfo(req, res) {
        connection.query(
            `INSERT INTO bookandauthor
                (bookId, authorId)
            VALUES (
                ${req.body.bookId},
                ${req.body.authorId}
            )`,
            (err, req) => {
                if (err) {
                    console.log(err);
                    res.status(500).json(err);
                    return;
                }

                res.json({ message: 'Book info has been added!' });
            }
        );
    },
    // Admin users can update book info
    updateBookInfo(req, res) {
        connection.query(
            `UPDATE bookandauthor
            SET
                bookId = ${req.body.bookId},
                authorId = ${req.body.authorId}
            WHERE
                id = ${req.params.bookinfoId}`,
            (err, req) => {
                if (err) {
                    console.log(err);
                    res.status(500).json(err);
                    return;
                }

                res.json({ message: 'Book information has been updated!' });
            }
        );
    },
    // Admin users can delete book info
    deleteBookInfo(req, res) {
        connection.query(
            `DELETE from bookandauthor WHERE id = ${req.params.bookinfoId}`,
            (err, req) => {
                if (err) {
                    console.log(err);
                    res.status(500).json(err);
                    return;
                }

                res.json({ message: 'Book information has been deleted!' });
            }
        );
    },
}

module.exports = bookAuthorController;