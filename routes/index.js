const express = require('express');
const ProductCtrl = require('../controllers/product');
const UserCtrl = require('../controllers/user');
const auth = require('../middlewares/auth');
const api = express.Router();


api.get('/product', ProductCtrl.getProducts);
api.get('/product/:id', ProductCtrl.getProduct);
api.post('/product', auth, ProductCtrl.saveProduct);
api.put('/product/:id', auth, ProductCtrl.updateProduct);
api.delete('/product/:id', auth, ProductCtrl.deleteProduct);

api.post('/signup', UserCtrl.signUp);
api.post('/signin', UserCtrl.signIn);

api.get('/private', auth, (req, res) => {

    res.status(200).send({ message: ' Tiene Acceso ' });

});

module.exports = api;