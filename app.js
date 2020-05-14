const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');

const app = express();
const api = require('./routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('.hbs', hbs({
    defaultLayout: 'default',
    extname: '.hbs'
}))
app.set('view engine', '.hbs');


app.use('/api', api);

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Bienvenidos ',
        api: [{
            add: "/api/product",
            update: "/api/product/:id",
            delete: "/api/product/:id",
            get: "/api/product",
            login: "/login"
        }]
    })
});

app.get('/login', (req, res) => {
    res.render('login')
});

app.get('/products', (req, res) => {
    res.render('product')
});

module.exports = app;