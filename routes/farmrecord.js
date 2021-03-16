const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/all', ctrl.farmrecord.getAll);
router.get('/create', ctrl.farmrecord.createField);

module.exports = router;