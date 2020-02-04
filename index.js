const express = require('express');
const app = express();

app.use('/api', require('./api/configuration/api_v1.js'));
app.use('/api', require('./api/configuration/api_v2.js'));

var port = 10010;

app.listen(port, function() {
    console.log("Server is running on " + port + " port");
});