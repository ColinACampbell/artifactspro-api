const express = require('express');
const router = express.Router();
const memberController = require('./../controllers/members')

router.get('/all',memberController.getAll)

router.get('/invite-code',memberController.getInviteCode)

router.get('/user-as-member',memberController.getUserAsMember);

router.get('/member-from-id',memberController.getMemberFromID);

router.put('/change-member-role',memberController.changeMemberRole);

router.delete('/user/:id',memberController.removeFromOrg);

module.exports = router;