const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Messages = require('../models/usermessage');

const messageRouter = express.Router();

messageRouter.use(bodyParser.json());

messageRouter.route('/')
.get((req,res,next) => {
    Messages.find({})
    .then((messages) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(messages);
    }, (err) => next(err))
    .catch((err) => next(err));
})

.post((req, res, next) => {
    Messages.create(req.body)
    .then((message) => {
        console.log(' Message Created ', message);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(message);
    }, (err) => next(err))
    .catch((err) => next(err));
})
  
.delete((req, res, next) => {
    Messages.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});

module.exports = messageRouter;