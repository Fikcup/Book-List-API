const express = require('express');
const routes = require('./routes');
const connection = require('./db/config/connection')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(routes);

// Once connected to the database, launches the server
connection.connect(error => {
    if (error) throw error;
    console.log('Successfully connected to the database');

    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    });
});