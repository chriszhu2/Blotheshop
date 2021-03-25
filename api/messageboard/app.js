var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var newRouter = require('./routes/new');
var messageRouter = require('./routes/messagerouter');
const Chats = require('./models/usermessage');
var test = require('./db');

var cors = require("cors");
const mongoose = require('mongoose')


const { MongoClient } = require('mongodb'); // how we will conntect to MongoDB database, cluster, and close cluster
var mongoDB = 'mongodb+srv://chriszhu2:hello123@cluster0.nz4bo.mongodb.net/message_board?retryWrites=true&w=majority';
mongoose.connect(mongoDB,{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const client = new MongoClient(mongoDB);



// const url = 'mongodb://localhost:27017/messageboard';
// const connect = mongoose.connect(url);

// connect.then((db) => {
//     console.log("Connected correctly to server");
// }, (err) => { console.log(err); });

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public'))); // allows us to serve static data from public folder


app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/new', newRouter);
app.use('/messages', messageRouter);

let messageBoard = [];

app.post('/create', function(req, res) {
  const board = {
    name: req.body.name,
    description: req.body.description
  };

  Chats.create(board);
  console.log(Chats);
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;