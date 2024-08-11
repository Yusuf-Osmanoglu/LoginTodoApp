process.env.TZ = 'Etc/UTC';

const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

var cors = require('cors');


const routes = require('./src/routes');

const { apiResponse } = require("./src/helpers");

const app = express();

app.use(cors());


app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);


const server = http.Server(app);
server.listen(8082);
