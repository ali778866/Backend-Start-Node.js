const path = require('path');

const express = require('express');

const rootDir = require('../helper/path');

const router = express.Router();

router.get('/success', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'html', 'success.html'));
});

module.exports = router; 