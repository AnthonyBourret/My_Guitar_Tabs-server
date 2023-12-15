require('dotenv').config();
const express = require('express');
const app = express();
const session = require('express-session');
const router = require('./app/router.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: 'keyboardcat',
    resave: true,
    saveUninitialized: true,
}));

app.use(router);

app.listen(process.env.PORT, () =>
    console.log(`Listening on ${process.env.BASE_URL}:${process.env.PORT}`)
);