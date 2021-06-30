const express = require('express');
const router = express.Router();
const {addNewClass} = require('./handler/classHandler');

router.get('/new',addNewClass);

module.exports = router;
