import mongoose from 'mongoose';

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

export default CategoriesSchema;