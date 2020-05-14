const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');


mongoose.connect(config.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, res) => {

    if (err) { return console.log('Error DB connect ' + err); }

    console.log("Conexion DB establecida");

    app.listen(config.port, () => {
        console.log("Running API RESTful http:localhost:" + config.port);
    });
});

//db
/*mongoose.connect('mongodb://localhost:27017/shop', (err, res) => {

    if (err) { return console.log('Error DB connect ' + err); }

    console.log("Conexion DB establecida");

    app.listen(port, () => {
        console.log("Running API RESTful http:localhost:" + port);
    });

});*/