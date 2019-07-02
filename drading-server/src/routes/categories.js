const express = require('express');
const router = express.Router();

const CategoryModel = require('../models/categories.model');

router.post('/categories', (req, res) => {
  if(!req.body) {
    return res.status(400).send('Request body is missing')
  }

  let model = new CategoryModel(req.body)
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

router.get('/categories', (req, res) => {
  CategoryModel.find().then(function(categories) {
    res.json(categories); 
  });
})

module.exports = router