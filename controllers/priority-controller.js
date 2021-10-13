const connection = require('../db/config/connection');

const priorityController = {
    addPriority(req, res) {
        connection.query(
            `INSERT INTO bookpriority
                (priorityLevel)
            VALUES (
                ${JSON.stringify(req.body.priorityLevel)}
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
    updatePriority(req, res) {
        connection.query(
            `UPDATE bookpriority 
            SET 
                priorityLevel = ${JSON.stringify(req.body.priorityLevel)}
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
    }
}

module.exports = priorityController;