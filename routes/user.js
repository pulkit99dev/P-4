const express = require('express');

let router = express.Router();

let userController = require('../controllers/user_controller');

router.get('/sign-in', userController.signin);

router.get('/sign-up', userController.signup);

router.get('/profile', userController.profile);

router.post('/create', userController.create);

module.exports = router;