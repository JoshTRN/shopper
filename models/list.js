const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListSchema = new Schema({
    _userId: {type: Schema.Types.ObjectId, ref: 'User'},
    name: String

});


const List = mongoose.model('List', ListSchema);
module.exports = List;