const express = require('express');

const router = express.Router();

// get a list of ninjas from db
router.get('/ninjas', (req, res) => {
  res.send({type: 'GET'});
})

// add a ninja from db
router.post('/ninjas', (req, res) => {
  res.send({type: 'POST'});
})


// update ninja in db
router.put('/ninjas/:id', (req, res) => {
  res.send({type: 'PUT'});
})

// delete ninja from db
router.delete('/ninjas/:id', (req, res) => {
  res.send({type: 'DELETE'});
})
