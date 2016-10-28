module.exports = function(mongoose) {
  var messageSchema = require('./message')(mongoose);

    const userSchema = mongoose.Schema({
        name: String,
        messages: [messageSchema]
    }, {
        timestamps: true
    });
    return userSchema;
}
