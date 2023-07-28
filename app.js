const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('in the first Middleware!');
    next();
});

app.use((req, res, next) => {
    console.log('In the second Middleware');
    res.send('<h1>Hello From Express!</h1>');
});

app.listen(4000);