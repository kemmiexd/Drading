const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const usersRouter = require('./routes/users');
const categoriesRouter = require('./routes/categories');
const productRouter = require('./routes/product');

app.use(bodyParser.json());

app.use(usersRouter);
app.use(categoriesRouter);
app.use(productRouter);
app.use(express.static('public'));

const PORT = process.env.PORT || 9999;
app.listen(PORT, () => console.info(`Server has started on ${PORT}`));
