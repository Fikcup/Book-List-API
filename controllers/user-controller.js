const connection = require('../db/config/connection');

const userController = {
    getAllUsers(req, res) {
        connection.query(
            `SELECT id, username, firstName, lastName FROM users`,
            function(err, results) {
                if (err) {
                    console.log(err);
                    res.status(500).json(err);
                    return;
                }

                res.json(results);
            }
        )
    },
}

module.exports = userController;