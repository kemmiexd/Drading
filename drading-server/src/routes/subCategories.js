import express from 'express';

import { SubCategories } from '../models';

const router = express.Router();

router.post('/sub-categories', (req, res) => {
  if(!req.body) {
    return res.status(400).send('Request body is missing')
  }

  let model = new SubCategories(req.body)
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

router.get('/sub-categories', (req, res) => {
  SubCategories.find().then(function(subCategories) {
    res.json(subCategories); 
  });
})

export default router