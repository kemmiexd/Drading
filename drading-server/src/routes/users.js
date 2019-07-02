const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
  res.send('Hello users')
});

router.get('/users/:name', (req, res) => {
  res.send(`Hello users ${req.params.name}`)
});

module.exports = router