const express = require('express');
const controller = require('../controllers/userControllers');
const router = express.Router();
router.get('/', controller.getUser);
router.post('/', controller.postUser);

module.exports = router;
