const connection = require('../db/config/connection');

const priorityController = {
    // Users can give books on their reading list a priority value
    updatePriority(req, res) {
        connection.query(
            `UPDATE readinglist 
            SET
                listname = ${JSON.stringify(req.body.listname)},
                userId = ${JSON.stringify(req.body.userId)},
                bookId = ${JSON.stringify(req.body.bookId)},
                priorityId = ${req.body.priorityId}`,
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

module.exports = priorityController;