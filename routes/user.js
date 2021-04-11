const express = require('express');
const userController = require('./../controllers/user')
const router = express.Router();
const authMiddleware = require("./../middleware/authenticate")

router.post('/auth',authMiddleware,userController.auth);

router.post('/signup/process-1',userController.signup);

router.post('/login', userController.login);

router.get('/info',authMiddleware,userController.info);

router.post('/request-password-recovery',userController.requestPasswordRecovery)

router.post('/verify/:accesscode', userController.verifyUser);

router.post('/logout',userController.logout)

router.put('/update-base-info',authMiddleware,userController.updateBasicInfo)

module.exports = router;