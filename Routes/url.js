const express = require('express');
const router = express.Router();

const {handleGenerateNewShortUrl, handleAnalytics} = require('../Controllers/url');

router.post('/', handleGenerateNewShortUrl);
router.get('/analytics/all', handleAnalytics);

module.exports = router;