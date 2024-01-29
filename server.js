const express = require('express');
const app =express();
var path = require('path');
const session = require('express-session');


app.use(express.static(path.join(__dirname,'public')));

const homeRouter= require('./routes/home.routes');
const cartRouter= require('./routes/cart.routes');

app.use(session({
    secret: 'lab2',
    resave: false,
    globalcount: 0,
    kosarica: {},
    saveUninitialized: true
}))

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use('/home', homeRouter);
app.use('/cart', cartRouter);

app.listen(3000);