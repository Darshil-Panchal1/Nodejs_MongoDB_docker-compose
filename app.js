const express = require('express');
const createError = require('http-errors');
const dotenv = require('dotenv').config;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//Initialize DB
require('./initDB')();

const ProductRoute = require('./Routes/Product.route');
app.use('/products', ProductRoute);

//404 handler and pass to error handler
app.use((req, res, next) => {
    next(createError(404, 'Not Found !'));
});

//Error Handler
app.use((err, req, res, next ) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});