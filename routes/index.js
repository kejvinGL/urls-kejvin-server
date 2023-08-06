const express = require('express');
const router = express.Router();

const Url = require('../models/Url')

router.get('/:code', async (req, res) => {
    const url = await Url.findOne({ urlCode: req.params.code })
    res.redirect(url.longUrl)
});
router.delete('/:code', async (req, res) => {
    const url = await Url.findOneAndDelete({ urlCode: req.params.code })
    res.json(url)
})


module.exports = router;