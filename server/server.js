var express = require('express');
var cors = require('cors');
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var Phones = require('./models/phoneCatalogModel');
var bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connection.openUri('mongodb://localhost/phoneCatalogDB');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/phoneCatalogRoutes');
routes(app);

app.listen(port);

console.log('Phone Catalog RESTful API server started on: ' + port);