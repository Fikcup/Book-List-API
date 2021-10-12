const connection = require('../db/config/connection');

const authorController = {
    // Users can request a list of authors
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
    // Users can search for an author
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
    // Admin users can add authors to the database
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
    // Admin users can update author name in the event of an error
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
    // Admin users can remove authors from the database
    deleteAuthor(req, res) {
        connection.query(
            `DELETE FROM authors WHERE id = ${req.params.authorId}`,
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