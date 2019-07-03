import express from 'express';

import { Users } from '../models';

const router = express.Router();

router.post('/users', (req, res) => {
  if(!req.body) {
    return res.status(400).send('Request body is missing')
  }

  let model = new Users(req.body)
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

router.get('/users', (req, res) => {
  Users.find().then(function(users) {
    res.json(users); 
  });
})

export default router;