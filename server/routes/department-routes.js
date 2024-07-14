const express = require('express');
const controller = require('../controllers/departmentControllers');
const upload = require('../middlewares/upload');
const router = express.Router();
router.get('/', controller.getDepartments);
router.post('/', upload.single('image'), controller.postDepartments);

module.exports = router;
