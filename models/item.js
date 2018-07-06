const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ItemSchema = new Schema({
    name: String,
    isleNum: String,
    carted: {
        type: Boolean,
        default: false
    }
})

const Item = mongoose.model('Item', ItemSchema);
module.exports = Item;