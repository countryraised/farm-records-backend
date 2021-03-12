const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/all', ctrl.farmrecord.getAll);


module.exports = router;