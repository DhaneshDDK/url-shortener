const express = require('express');
const router = express.Router();

const {signinPage, signupPage} = require('../Controllers/user')


router.get('/signup', signupPage);
router.get('/signin', signinPage);

module.exports = router;