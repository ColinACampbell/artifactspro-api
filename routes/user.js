const express = require('express');
const userController = require('./../controllers/user')
const router = express.Router();
const authMiddleware = require("./../middleware/authenticate")

router.post('/auth',authMiddleware,userController.auth);

router.post('/sign-up',userController.signup);

router.post('/login', userController.login);

router.get('/',authMiddleware,userController.info);

router.put('/',authMiddleware,userController.updateBasicInfo)

router.post('/password/recovery',userController.requestPasswordRecovery);

router.put('/password/recovery',userController.recoverPassword);

router.post('/verify/:accesscode', userController.verifyUser);

router.post('/logout',userController.logout)


module.exports = router;