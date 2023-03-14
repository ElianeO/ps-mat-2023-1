//Carrega as variáveis de ambiente do arquivo .env para a aplicação
require ('dotenv').config()
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//Conexão ao BD
const db = require('./models')

try {
db.sequelize.authenticate()
console.log('SEQUELIZE: connection has been established successfully')
}
catch(error){
console.error('*SEQUELIZE: unable to connect to the database: ', error)
process.exit(1)
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

/******************** ROTAS ******************************************/
const users = require('./routes/users')
app.use('/users', users)

const channels = require('./routes/channels')
app.use('/channels', channels)

const paymentMethods = require('./routes/payment_methods')
app.use('/payment_methods', paymentMethods)

const carriers = require('./routes/carriers')
app.use('/carriers', carriers)

const cities = require('./routes/cities')
app.use('/cities', cities)

const shipment_priorities = require('./routes/shipment_priorities')
app.use('/shipment_priorities', shipment_priorities)

const order_statuses = require('./routes/order_statuses')
app.use('/order_statuses', order_statuses)

module.exports = app;
