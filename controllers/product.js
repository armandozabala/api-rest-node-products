const Product = require('../models/product');


function getProduct(req, res) {

    let productId = req.params.id;

    Product.findById(productId, (err, producto) => {

        if (err) return res.status(500).send({ menssage: 'Error Request ' });

        if (!producto) return res.status(404).send({ message: 'El producto No Existe' });

        res.status(200).send({ producto })
    });
}

function getProducts(req, res) {

    Product.find({}, (err, productos) => {

        if (err) return res.status(500).send({ menssage: 'Error Request ' });

        if (!productos) return res.status(404).send({ message: 'No existe productos' });

        res.status(200).send({ productos })
    });
}

function updateProduct(req, res) {

    let productId = req.params.id;
    let update = req.body;

    Product.findByIdAndUpdate(productId, update, (err, product) => {

        if (err) return res.status(500).send({ menssage: 'Error to update product' });

        res.status(200).send({ message: 'Product update succesful' });

    });

}

function deleteProduct(req, res) {


    let productId = req.params.id;

    Product.findById(productId, (err, product) => {

        if (err) return res.status(500).send({ menssage: 'Error delete product' });

        product.remove(err => {
            if (err) res.status(500).send({ message: ' Error al delete product ' });
            res.status(200).send({ message: 'Product delete succesful' });
        });
    });

}

function saveProduct(req, res) {

    console.log(' POST ');
    console.log(req.body);

    let product = new Product();
    product.name = req.body.name;
    product.price = req.body.price;
    product.description = req.body.description;
    product.picture = req.body.picture;
    product.category = req.body.category;

    product.save((err, productStored) => {
        if (err) res.status(500).send({ message: 'Error save DB' });
        res.status(200).send({ product: productStored });
    });
}

module.exports = {
    saveProduct,
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct
}