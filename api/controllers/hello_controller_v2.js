'use strict';

module.exports = {
    getHello: getHello
};

function getHello(req, res) {
    res.json('Hello, Pika');
}