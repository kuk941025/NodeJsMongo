const express = require('express');
const router = express.Router();

//get a list from db
router.get('/ninjas', (req,res) => {
    res.send({type:'GET'});
});

//add data to db
router.post('/ninjas', (req,res) => {
    res.send({type:'POST'});
});

//update a ninja in db
router.put('/ninjas/:id', (req,res) => {
    res.send({type:'PUT'});
});

//delete from db
router.delete('/ninjas/:id', (req,res) => {
    res.send({type:'DELETE'});
});

module.exports = router;