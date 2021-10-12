const connection = require('../db/config/connection');

const bookAuthorController = {
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

                res.json(req);
            }
        );
    },
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

                res.json(req);
            }
        );
    },
}

module.exports = bookAuthorController;