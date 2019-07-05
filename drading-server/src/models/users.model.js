import mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema({
  uid: String,
  displayName: {
    type: String,
    required: true,
  },
  photoURL: String,
  email: String,
  phone: String,
  password: String,
  address: String,
  gender: String,
  dateOfJoin: String,
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