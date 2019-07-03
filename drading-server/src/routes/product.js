import express from 'express';

import { Product } from '../models';

const router = express.Router();

router.post('/product', (req, res) => {
  if(!req.body) {
    return res.status(400).send('Request body is missing')
  }

  let model = new Product(req.body)
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
  Product.find().then(function(product) {
    res.json(product); 
  });
})

export default router;