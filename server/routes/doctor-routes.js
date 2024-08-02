const express = require('express');
const genPassword = require('generate-password');
const router = express.Router();
router.get('/', controller.getDoctor);
router.post('/', controller.postDoctor);
router.post('/sign-up', controller.postDoctor);

module.exports = router;
