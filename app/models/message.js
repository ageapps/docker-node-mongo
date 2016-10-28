module.exports = function(mongoose) {
    const messageSchema = mongoose.Schema({
        msg: String
    }, {
        timestamps: true
    });
    return messageSchema;
}
