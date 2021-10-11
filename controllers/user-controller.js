const connection = require('../db/config/connection');

const userController = {
    // Get all users
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
        );
    },
    // Get one user by id
    getOneUser(req, res) {
        connection.query(
            `SELECT * FROM users WHERE id = ${req.params.userId}`,
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
    // Create a new user
    createUser(req, res) {
        connection.query(
            `INSERT INTO users 
                (username, userPassword, firstName, lastName) 
            VALUES (
                ${JSON.stringify(req.body.username)}, 
                ${JSON.stringify(req.body.userPassword)}, 
                ${JSON.stringify(req.body.firstName)}, 
                ${JSON.stringify(req.body.lastName)}
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
    // Update a user
    updateUser(req, res) {
        connection.query(
            `UPDATE users 
            SET 
                username = ${JSON.stringify(req.body.username)}, 
                userPassword = ${JSON.stringify(req.body.userPassword)},
                firstName = ${JSON.stringify(req.body.firstName)}, 
                lastName = ${JSON.stringify(req.body.lastName)} 
            WHERE 
                id = ${req.params.userId}`,
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
    // Delete a user
    deleteUser(req, res) {
        connection.query(
            `DELETE from users WHERE id = ${req.params.userId}`,
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

module.exports = userController;