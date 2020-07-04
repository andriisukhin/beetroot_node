const express = require('express');
const router = require('./app/routes');
const ejsLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const logger = require('./app/middleware/logger')

const app = express();
const port = 8080;

app.use(express.static(__dirname + '/public'))

app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.use(logger);

app.use((req, res, next) => {
    console.log('Authorisation ...');
    next();
})

app.use(bodyParser.urlencoded());

app.use('/', router);

app.listen(port, () => {
    console.log(`app start on port ${port}`);
})