const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/drading', {useNewUrlParser: true});
mongoose.set('useCreateIndex', true);


const CategoriesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true
  }
});
const Categories = mongoose.model('Categories', CategoriesSchema);

module.exports = Categories;