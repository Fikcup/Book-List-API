const connection = require('../db/config/connection');

const userController = {
    getAllUsers(req, res) {
        connection.query(
            `SELECT id, username, firstName, lastName FROM users`,
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
    getOneUser(req, res) {
        connection.query(
            `SELECT id, username, firstName, lastName FROM users WHERE username = ${JSON.stringify(req.body.username)}`,
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

module.exports = userController;