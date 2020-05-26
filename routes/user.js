const express = require('express');
const userController = require('./../controllers/user')
const router = express.Router();
const authMiddleware = require('./../middleware/auth');

// auth end point is to ensure that the user is logged in with cookies
router.post('/auth',userController.auth);

// Sign up user and send of verification link
router.post('/signup/process-1',userController.signup);

router.post('/login', userController.login);

router.use('/info',authMiddleware)
router.get('/info',userController.info);

router.post('/verify/:accesscode', userController.verifyUser);

router.post('/logout',userController.logout)

module.exports = router;