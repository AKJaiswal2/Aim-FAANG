const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const { createConnection } = require("typeorm");

createConnection()
    .then(async (con) => {
        app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            next();
        });
        app.use(express.json());
        //app.use(bodyParser.urlencoded({ extended: true }));
        app.use('/', require('./routes/user'));
        app.use('/user', require('./routes/user'));

        const port = process.env.port || 3000;
        app.listen(port, console.log(`The server has started at ${port}`));
    })
    .catch((error) => console.log("TypeORM connection error: ", error))

