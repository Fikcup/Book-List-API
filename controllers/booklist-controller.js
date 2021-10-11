const connection = require('../db/config/connection');

const bookListController = {
    getAllBooklists(req, res) {
        connection.query(
            `SELECT * FROM readinglist`,
            (err, req) => {
                if (err) {
                    console.log(err);
                    res.status(500).json(err);
                    return;
                }

                res.json(req);
            }
        )
    },
    getOneBooklist(req, res) {
        connection.query(
            `SELECT * FROM readinglist WHERE id= ${req.params.listId}`,
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

module.exports = bookListController;