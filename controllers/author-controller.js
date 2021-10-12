const connection = require('../db/config/connection');

const authorController = {
    getAllAuthors(req, res) {
        connection.query(
            `SELECT * FROM authors`,
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
    getOneAuthor(req, res) {
        connection.query(
            `SELECT * FROM authors where id = ${req.params.authorId}`,
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
    createAuthor(req, res) {
        connection.query(
            `INSERT INTO authors
                (firstName, lastName)
            VALUES (
                ${JSON.stringify(req.body.firstName)},
                ${JSON.stringify(req.body.lastName)}
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
    updateAuthor(req, res) {
        connection.query(
            `UPDATE authors
            SET
                firstName = ${JSON.stringify(req.body.firstName)},
                lastName = ${JSON.stringify(req.body.lastName)}
            WHERE
                id = ${req.params.authorId}`,
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

module.exports = authorController;