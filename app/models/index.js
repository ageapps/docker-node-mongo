'use strict';

var app = require('../app');
var userSchema = require('./user')(app.mongoose);
var messageSchema = require('./message')(app.mongoose);



// find user by name
userSchema.methods.addMsg = function(msg, cb) {
    this.messages.push(msg);
    return this.save(cb)
};

// find user by name
userSchema.statics.findByName = function(name, cb) {
    return this.findOne({
        name: name
    }, cb);
};


var User = app.mongoose.model('User', userSchema);
var Message = app.mongoose.model('Message', messageSchema);

exports.User = User;
exports.Message = Message;
