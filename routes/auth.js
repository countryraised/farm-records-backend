const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


router.post('/login', ctrl.auth.login);
router.get('/', ctrl.auth.verifyUser);
router.get('/', ctrl.auth.verifyUser);

module.exports = router;