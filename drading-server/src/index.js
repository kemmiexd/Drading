import express from 'express';
import bodyParser from 'body-parser';

import usersRouter from './routes/users';
import categoriesRouter from './routes/categories';
import subCategoriesRouter from './routes/subCategories';

import productRouter from './routes/product';

const app = express();
app.use(bodyParser.json());

app.use(categoriesRouter);
app.use(subCategoriesRouter)
app.use(productRouter);

app.use(usersRouter);

app.use(express.static('public'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.info(`Server has started on ${PORT}`));
