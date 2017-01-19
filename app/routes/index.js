const express = require('express');
const router = express.Router();
var userController = require('../controllers/user_controller.js');

console.log("Models SetUp");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.get("/users", userController.index);
router.get("/users/new", userController.new);
router.post("/users", userController.checkUser);

router.get("/users/msg", userController.newMsg);
router.post("/users/msg", userController.createMsg);


// router.get('/user', function(req, res, next) {
//     userController.newUser("pepe", function(messages) {
//         console.log("user aded");
//         userController.addMsg("pepe", "Heeeeeey", function() {
//             if (messages && messages.length > 0) {
//                 res.render('index', {
//                     title: JSON.stringify(messages)
//                 });
//             } else {
//                 res.render('index', {
//                     title: 'New User'
//                 });
//             }
//         });
//
//     });
//
// });


module.exports = router;
