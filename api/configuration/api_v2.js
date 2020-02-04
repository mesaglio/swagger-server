var SwaggerExpress = require('swagger-express-mw');
const express = require('express');

module.exports = app = express();

var config = {
    appRoot: './',
};

config.swaggerFile = "./api/swagger/v2/hello_v2.yaml";
SwaggerExpress.create(config, function (err, swaggerExpress) {
    if (err) { throw err; }
    swaggerExpress.register(app);
});