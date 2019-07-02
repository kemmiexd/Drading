const express = require('express');
const router = express.Router();

const ProductModel = require('../models/product.model');

router.post('/product', (req, res) => {
  if(!req.body) {
    return res.status(400).send('Request body is missing')
  }

  let model = new ProductModel(req.body)
  model.save()
    .then(doc => {
      if(!doc || doc.length === 0) {
        return res.status(500).send(doc)
      }

      res.status(201).send(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

router.get('/product', (req, res) => {
  ProductModel.find().then(function(product) {
    res.json(product); 
  });
})

module.exports = router