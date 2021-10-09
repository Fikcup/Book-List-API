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
        )
    }
}

module.exports = bookController;