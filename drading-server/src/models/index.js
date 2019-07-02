
const mongoose = require('mongoose');

const mongo = mongoose.connect('mongodb://localhost:27017/drading', {useNewUrlParser: true});
module.exports = mongo