const express = require('express');
const router = express.Router();
const orgController = require('./../controllers/organization')
const authMiddleware = require("./../middleware/authenticate")

router.post('/create',authMiddleware,orgController.createOrg);

router.get('/info',authMiddleware,orgController.info)

// Updates orgInfo
router.put('/info',authMiddleware,orgController.changeOrgInfo)

router.get('/info-from/access-code/:accessCode',orgController.infoFromAccessCode)

// Update the access code
router.put('/access-code',authMiddleware,orgController.updateInviteCode)

// Adds user to a group based on the code provided
router.post('/invite-from-code/:code',authMiddleware,orgController.inviteFromAccessCode)

// Get All the organizations that the user belong to
router.get('/',authMiddleware,orgController.getAll)

router.post('/switch',authMiddleware,orgController.switchOrganization)

// Implement code to remove user from org
//router.delete('/user/:id',authMiddleware,orgController.removeOrgMember)

module.exports = router;