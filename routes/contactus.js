const path = require('path');

const express = require('express');

const rootDir = require('../helper/path');

const router = express.Router();

router.get('/contactus', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'html', 'contactus.html'));
});

router.post('/success', (req, res, next) => {
    console.log(req.body);
    res.redirect('/success');
})

module.exports = router;