const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: String,
    email: String,
    imgUrl: String,
    lists: [{type: Schema.Types.ObjectId, ref: 'List'}]
})

const User = mongoose.model('User', UserSchema);
module.exports = User;