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
}

module.exports = bookAuthorController;