const connection = require('../db/config/connection');

const adminController = {
    updateAdminAccess(req, res) {
        connection.query(
            `UPDATE users 
            SET 
                admin = ${req.body.admin}
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
    }
}

module.exports = adminController;