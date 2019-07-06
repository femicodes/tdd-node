const express = require('express');
const app = express();

process.env.JWT_KEY = "thisIsMyJwtKeyUsedToEncodeTheTokens";

const bodyParser = require('body-parser');
const routes = require('./api/routes');

app.use(bodyParser.json());
app.use(routes);

app.get('/', (req, res) => {
    res.send({
        message: 'Yeezy 350 boost'
    })
})


module.exports = app;
