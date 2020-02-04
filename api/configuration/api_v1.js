var SwaggerExpress = require('swagger-express-mw');
const express = require('express');

module.exports = app = express();

var config = {
    appRoot: './',
};

config.swaggerFile = "./api/swagger/v1/hello_v1.yaml";
SwaggerExpress.create(config, function (err, swaggerExpress) {
    if (err) { throw err; }
    swaggerExpress.register(app);
});

config.swaggerFile = "./api/swagger/v1/bye_v1.yaml";
SwaggerExpress.create(config, function (err, swaggerExpress) {
    if (err) { throw err; }
    swaggerExpress.register(app);
});
