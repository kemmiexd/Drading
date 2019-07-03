import mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema({
  uid: {
    type: 'ObjectId',
    unique,
  },
  displayName: {
    type: String,
    required: true,
  },
  photoURL: String,
  email: String,
  phone: String,
  password: {
    type: String,
    required: true
  },
  address: String,
  gender: String,
  dateOfJoin: Date,
  searchHistory: [String],
  postedNews: [{
    type: 'ObjectId',
    ref: 'Product'
  }],
  savedNews: [{
    type: 'ObjectId',
    ref: 'Product'
  }],
});

export default UsersSchema;