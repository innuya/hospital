const express = require('express');
const controller = require('../controllers/hospitalControllers');
// const upload = require('../middlewares/upload');
const router = express.Router();
router.get('/', controller.getHospital);
//router.post('/', upload.single('image'), controller.postHospital);
router.post('/', controller.postHospital);

module.exports = router;
