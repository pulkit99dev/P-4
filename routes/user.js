const express = require('express');
const passport = require('passport');

let router = express.Router();

let userController = require('../controllers/user_controller');

router.get('/sign-in', userController.signin);

router.get('/sign-up', userController.signup);

router.get('/profile', userController.profile);

router.post('/create', userController.create);

router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/user/sign-in'}),
    userController.createSession)

module.exports = router;