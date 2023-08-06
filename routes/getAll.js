const express = require('express');
const router = express.Router();
const Url = require('../models/Url')

router.get('/', async (req, res) => {
    try {
        const url = await Url.find()
        if (url) {
            return res.json(url)
        } else {
            return res.status(404).json('No URL found')
        }
    } catch (err) {

    }
})


module.exports = router;