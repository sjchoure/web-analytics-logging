const router = require('express').Router();
const Pin = require('../models/Pins');

// Post Request
router.post('/', async (req, res) => {
    const newPin = Pin(req.body);

    try{
        const savedPin = await newPin.save();
        res.status(200).json(savedPin);
    }catch(err){
        res.status(500).json(err);
    };
});

// Get Request
router.get('/', async (req, res) => {
    try{
        const pins = await Pin.find();
        res.status(200).json(pins);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;