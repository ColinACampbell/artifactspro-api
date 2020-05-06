const express = require('express');
const router = express.Router();
const memberContoller = require('./../controllers/members')


router.get('/all',memberContoller.getAll)

router.get('/invite-code',memberContoller.getInviteCode)

module.exports = router;