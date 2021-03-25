var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var messageBoard = require('./messagerouter');
const Chats = require('../models/usermessage');
var mongo = require('mongodb');

const messages = [
  {
    description: "Hi there!",
    name: "Amando",
  },
  {
    description: "Hello World!",
    name: "Charles",
  }
];


/* GET home page. */
// router.get('/', function(req, res, next) {
//   console.log(messages);
//   res.render('formindex', { title: 'Mini Message Board' , title2: 'Enter your Message', messages: messages});

// });

// router.post('/', function(req, res, next) {
//   const words = Chats.create({name:req.body.nameText, description:req.body.messageText}, function(error, newobject){
//     if(error) {
//       console.log(error)
//     }
//     else {
//       console.log(newobject);
//       console.log(newobject.id)
//       var object = {name: newobject.name, description: newobject.description}
//       console.log("object is" + object);
//       messages.push(object)
//       console.log(messages)
//     }
//   }) 
//     //document is sent to chatbox collection. check mongodbatlas
//   res.redirect("/");
// });

// router.post('/messages', (req, res) => {
//   var newMessage = new Chats(req.body);
//   newMessage.save((err, doc) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(doc);
//     }
//   });
// });

// router.post('/', (req, res) => {
//   Chats.create(error, data) => {
//     console.log("trying to work");
//       if (error) {
//         console.log("error is " + error);
//         return next(error);
//       } else {
//           console.log(data)
//           console.log("i recieved it " + data);
//           var object = {name: data.name, description: data.description}
//           console.log("object is " + object);
//           res.json(data)
//       }
//   }
// });

router.post('/', (req, res) => {
  Chats.create((error, data) => {
      if (error) {
          return next(error)
      } else {
          res.json(data)
      }
  })
})

// router.post('/', function(req, res, next) {
//   Chats.create(req.body)
//   .then((message) => {
//       console.log(' Message Created ', message);
//       res.statusCode = 200;
//       res.setHeader('Content-Type', 'application/json');
//       res.json(message);
//   }, (err) => next(err))
//   .catch((err) => next(err));
// })



module.exports = router;
