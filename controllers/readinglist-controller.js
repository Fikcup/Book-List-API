const connection = require('../db/config/connection');

const readingListController = {
    // Users can view all reading lists that have been created by other users
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
    // Users can search for a reading list created by another user
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
    // Users can create a reading list and add books to it
    createReadingList(req, res) {
        connection.query(
            `INSERT INTO readinglist 
                (listname, userId, bookId) 
            VALUES (
                ${JSON.stringify(req.body.listname)},
                ${JSON.stringify(req.body.userId)},
                ${JSON.stringify(req.body.bookId)}
            )`,
            (err, req) => {
                if (err) {
                    console.log(err);
                    res.status(500).json(err);
                    return;
                }

                res.json({ message: 'Reading list has been created!' });
            }
        );
    },
    // Users can update their own reading lists
    updateReadingList(req, res) {
        connection.query(
            `UPDATE readinglist 
            SET 
                listname = ${JSON.stringify(req.body.listName)}, 
                userId = ${JSON.stringify(req.body.userId)}, 
                bookId = ${JSON.stringify(req.body.bookId)}
            WHERE
                id = ${req.params.listId}`,
            (err, req) => {
                if (err) {
                    console.log(err);
                    res.status(500).json(err);
                    return;
                }

                res.json({ message: 'Reading list has been updated!' });
            }
        );
    },
    // Users can delete their own reading lists
    deleteReadingList(req, res) {
        connection.query(
            `DELETE from readinglist WHERE id = ${req.params.listId}`,
            (err, req) => {
                if (err) {
                    console.log(err);
                    res.status(500).json(err);
                    return;
                }

                res.json({ message: 'Reading list has been deleted!' });
            }
        );
    }
}

module.exports = readingListController;