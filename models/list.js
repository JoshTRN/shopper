const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ListSchema = new Schema({

    name: String,

    items: [{type: Schema.Types.ObjectId, ref: 'Item'}]

})


const List = mongoose.model('List', ListSchema);
module.exports = List