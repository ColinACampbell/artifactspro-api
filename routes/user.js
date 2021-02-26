const express = require('express');
const userController = require('./../controllers/user')
const router = express.Router();
const authMiddleware = require("./../middleware/authenticate")

// TODO : Update Client
router.post('/auth',authMiddleware,userController.auth);

// TODO : Update client
router.post('/signup/process-1',userController.signup);

// TODO : Update client
router.post('/login', userController.login);

// TODO : Update Client
router.get('/info',authMiddleware,userController.info);

// TODO : Update Client
router.post('/verify/:accesscode', userController.verifyUser);

// TODO : Update Client ( make the client remove the token from storage)
router.post('/logout',userController.logout)

module.exports = router;