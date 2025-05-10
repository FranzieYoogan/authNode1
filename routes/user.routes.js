const controller = require('../controllers/user.controller');
const express = require('express');
const router = express.Router();


router.get('/users', controller.getAll);
router.post('/register', controller.createUser);
router.post('/login', controller.loginUser);

module.exports = router;