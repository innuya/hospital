const express = require('express');
const upload = require('../middlewares/upload');
const router = express.Router();
router.post('/sign-up', upload.single('image'), controller.postDoctor);

module.exports = router;
