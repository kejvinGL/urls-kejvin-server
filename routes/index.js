const express = require('express');
const router = express.Router();

const Url = require('../models/Url')

router.get('/:code', async (req, res) => {
    try {
        const url = await Url.findOne({ urlCode: req.params.code });
        if (url) {
            res.redirect(url.longUrl);
        } else {
            res.status(404).send('URL not found.');
        }
    } catch (err) {
        res.status(500).send('Internal Server Error.');
    }
});

router.delete('/:code', async (req, res) => {
    try {
        const url = await Url.findOneAndDelete({ urlCode: req.params.code });

        if (url) {
            res.json(url);
        } else {
            res.status(404).json({ message: 'URL not found.' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Server error.' });
    }
});


module.exports = router;