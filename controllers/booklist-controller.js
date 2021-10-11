const connection = require('../db/config/connection');

const bookListController = {
    // Get all reading lists
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
    // Get one reading list by id
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
    // Create reading list
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
    // Update reading list
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
    // Delete reading list
    deleteBooklist(req, res) {
        connection.query(
            `DELETE from readinglist WHERE id = ${req.params.listId}`,
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

module.exports = bookListController;