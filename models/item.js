const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    _listId: {type: Schema.Types.ObjectId, ref: 'List'},
    name: String,
    isleNum: String,
    carted: {
        type: Boolean,
        default: false
    }
});

const Item = mongoose.model('Item', ItemSchema);
module.exports = Item;