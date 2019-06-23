const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const routes = require('./api/routes');

app.use(bodyParser.json());
app.use(routes);

app.get('/', (req, res) => {
    res.send({
        message: 'Yeezys'
    })
})


module.exports = app;
