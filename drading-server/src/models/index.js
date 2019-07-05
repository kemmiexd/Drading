import mongoose from 'mongoose';

import CategoriesSchema from '../models/categories.model';
import SubCategoriesSchema from '../models/subCategories.model';
import ProductSchema from '../models/product.model';
import UsersSchema from '../models/users.model';

mongoose.connect('mongodb://localhost:27017/drading', {useNewUrlParser: true});
mongoose.set('useCreateIndex', true);

const Categories = mongoose.model('Categories', CategoriesSchema);
const SubCategories = mongoose.model('SubCategories', SubCategoriesSchema);
const Product = mongoose.model('Product', ProductSchema);
const Users = mongoose.model('Users', UsersSchema);

export {
  Categories,
  SubCategories,
  Product,
  Users
}