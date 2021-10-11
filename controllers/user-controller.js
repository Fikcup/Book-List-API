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
            `SELECT * FROM users WHERE id= ${req.params.userId}`,
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
    // createUser(req, res) {
    //     connection.query(
    //         `INSERT INTO users (id, username, userPassword, firstName, lastName) VALUES (${req.body})`
    //     )
    // }
}

module.exports = userController;