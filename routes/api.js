const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');
//get a list from db
router.get('/ninjas', (req, res, next) => {
    res.send({ type: 'GET' });
});

//add data to db
router.post('/ninjas', (req, res, next) => {
    //create locally and save to db
    Ninja.create(req.body).then((ninja) => {
        res.send(ninja);
    }).catch(next);

});

//update a ninja in db
router.put('/ninjas/:id', (req, res, next) => {
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        Ninja.findOne({_id:req.params.id}).then(ninja => {
            res.send(ninja);
        })
    });
});

//delete from db
router.delete('/ninjas/:id', (req, res, next) => {
    Ninja.findByIdAndDelete({_id: req.params.id}).then((ninja) => {
        res.send(ninja);
    });
});

module.exports = router;