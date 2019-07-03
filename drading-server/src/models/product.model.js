import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    images: [{
      type: 'ObjectId',
      required: true,
    }],
    price: Number,
    description: String,
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    cateId: {
      type: 'ObjectId',
      ref: 'SubCategories',
      required: true,
    },
    userId: {
      type: 'ObjectId',
      ref: 'Users',
      required: true
    },
    onHome: Boolean
  }, 
  {
    timestamps: true, 
  }
);

export default ProductSchema;