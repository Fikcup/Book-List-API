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
        );
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
        );
    },
    createBooklist(req, res) {
        connection.query(
            `INSERT INTO readinglist (listname, user, book) VALUES (${JSON.stringify(req.body.listname)}, ${JSON.stringify(req.body.user)}, ${JSON.stringify(req.body.book)})`,
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
    updateBooklist(req, res) {
        connection.query(
            `UPDATE readinglist SET listname = ${JSON.stringify(req.body.listName)}, user = ${JSON.stringify(req.body.user)}, book = ${JSON.stringify(req.body.book)}`,
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

module.exports = bookListController;