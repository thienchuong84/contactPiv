const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contactController');

// get contacts listing
router.get('/', contactController.getAll);

module.exports = router;