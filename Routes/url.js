const express = require('express');
const router = express.Router();

const {handleGenerateNewShortUrl, handleRedirect, handleAnalytics} = require('../Controllers/url');

router.post('/', handleGenerateNewShortUrl);
router.get('/:shortId', handleRedirect);
router.get('/analytics/all', handleAnalytics);

module.exports = router;