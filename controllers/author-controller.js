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
    }
}

module.exports = authorController;