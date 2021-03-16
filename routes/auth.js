const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


router.post('/login', ctrl.user.login);
// router.get('/', ctrl.auth.verifyUser);
router.post('/signup', ctrl.user.signup);

module.exports = router;