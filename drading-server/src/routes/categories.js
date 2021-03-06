import express from 'express';

import { Categories } from '../models';

const router = express.Router();

router.post('/categories', (req, res) => {
  if(!req.body) {
    return res.status(400).send('Request body is missing')
  }

  let model = new Categories(req.body)
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
  Categories.find().then(function(categories) {
    res.json(categories); 
  });
})

export default router