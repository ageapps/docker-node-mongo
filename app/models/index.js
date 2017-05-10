'use strict';

var mongoose = require('mongoose');

var port = process.env.DB_PORT || '27017';
var host = process.env.DB_HOST || 'db';
var mongo_pass = process.env.MONGO_PASSWORD || '';
var mongo_user = process.env.MONGO_USERNAME || '';


mongoose.connect('mongodb://' + mongo_user + ':'+ mongo_pass + host + ':' + port );

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connected to MongoDB to: " + host + ":" + port);
});


var userSchema = require('./user')(mongoose);
var messageSchema = require('./message')(mongoose);



// find user by name
userSchema.methods.addMsg = function (msg, cb) {
    this.messages.push(msg);
    return this.save(cb)
};

// find user by name
userSchema.statics.findByName = function (name, cb) {
    return this.findOne({
        name: name
    }, cb);
};


var User = mongoose.model('User', userSchema);
var Message = mongoose.model('Message', messageSchema);

exports.User = User;
exports.Message = Message;