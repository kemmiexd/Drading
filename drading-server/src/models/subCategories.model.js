import mongoose from 'mongoose';

const SubCategoriesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  categoryId: {
    type: 'ObjectId',
    ref: 'Categories',
    required: true,
  }
});

export default SubCategoriesSchema;