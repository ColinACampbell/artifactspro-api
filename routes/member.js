const express = require('express');
const router = express.Router();
const memberController = require('./../controllers/members')

router.get('/all',memberController.getAll)

router.get('/invite-code',memberController.getInviteCode)

router.get('/user-as-member',memberController.getUserAsMember);

module.exports = router;