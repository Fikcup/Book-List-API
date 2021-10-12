const connection = require('../db/config/connection');

const readingListController = {
    // Get all reading lists
    getAllReadingLists(req, res) {
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
    getOneReadingList(req, res) {
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
    createReadingList(req, res) {
        connection.query(
            `INSERT INTO readinglist 
                (listname, user, bookId) 
            VALUES (
                ${JSON.stringify(req.body.listname)},
                ${JSON.stringify(req.body.user)},
                ${JSON.stringify(req.body.bookId)}
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
    // Update reading list
    updateReadingList(req, res) {
        connection.query(
            `UPDATE readinglist 
            SET 
                listname = ${JSON.stringify(req.body.listName)}, 
                user = ${JSON.stringify(req.body.user)}, 
                bookId = ${JSON.stringify(req.body.bookId)}
            WHERE
                id = ${req.params.listId}`,
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
    deleteReadingList(req, res) {
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

module.exports = readingListController;