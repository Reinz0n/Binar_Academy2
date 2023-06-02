require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const router = require('./routes');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yaml');
const fs = require('fs');

// const {HTTP_PORT} = process.env;

const file = fs.readFileSync('./docs.yaml', 'utf-8');
const swaggerDocument = YAML.parse(file);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev')); 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.set('view engine', 'ejs');

app.use(router); 

// 404
app.use((req, res, next) => {
    return res.status(404).json({
        message: "404 Not Found!"
    });
});

// 500
app.use((err, req, res, next) => {
    return res.status(500).json({
        message: err.message
    });
});

module.exports = app;

//app.listen(HTTP_PORT, () => console.log('running on port ', HTTP_PORT));