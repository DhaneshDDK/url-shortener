const express = require('express')
const router = express.Router();

const {handleUserSignup, handleUserSignin} = require('../Controllers/user')

router.route('/signup').post(handleUserSignup);
router.route('/signin').post(handleUserSignin);

module.exports = router;