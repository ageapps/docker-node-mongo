var models = require('../models');



exports.index = function(req, res, next) {
    models.User.find({}, function(err, usersFound) {
        console.log(JSON.stringify(usersFound));
        console.log(usersFound.length);
        res.render('users/index', {
            title: 'All Users',
            users: usersFound
        });
    });
}

exports.new = function(req, res, next) {
    res.render('users/new', {
        title: 'Add new User',
        message: ''
    });
}

exports.checkUser = function(req, res, next) {

    newUser(req.body.user.username, function(user, isNew) {
        const msg = isNew ? "User was created succesfully" : "User allready exists";
        res.render('users/new', {
            title: 'Add new User',
            message: msg
        });
    });
}
exports.newMsg = function(req, res, next) {
    res.render('users/msg', {
        title: 'Add new User',
        message: ""
    });
}

exports.createMsg = function(req, res, next) {

    addMsg(req.body.user.username, req.body.user.message, function(userExists, user) {
        const msg = userExists ? "Message was created succesfully" : "User doesn´t exist";
        res.render('users/msg', {
            title: 'Add new User',
            message: msg
        });
    });
}


function newUser(username, cb) {
    models.User.findByName(username, function(err, user) {
        if (user) {

            // take only the last 5
            if (user.messages.length > 5) {
                user.messages.splice(0, user.messages.length - 5);
            }
            cb(user, false);
        } else {
            addUser(username, cb);
        }
    });
};


function addMsg(username, msg, cb) {
    //console.log("addMsg: " + JSON.stringify(msg));
    models.User.findByName(username, function(err, user) {
        if (user) {
            var message = new models.Message({
                msg: msg,
                createdAt: new Date(msg.createdAt)
            });
            user.addMsg(message, function(err, user) {
                cb(true, user);
            });
        } else {
            cb(false);
        }
    });
};

var addUser = function(userName, cb) {
    var newUser = new models.User({
        name: userName,
        messages: []
    });
    newUser.save(function(err, user) {
        if (err) return console.error(err);
        console.log(user.name + " -> SAVED");
        cb(user, true);
    });
}
