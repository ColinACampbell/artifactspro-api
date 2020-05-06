const express = require('express');
const router = express.Router();
const orgController = require('./../controllers/organization')

// TODO : Write code to prevent user from being added to an organization twice
router.post('/create',orgController.createOrg);

router.get('/info',orgController.info)

router.get('/info-from/access-code/:accessCode',orgController.infoFromAccessCode)

// Adds user to a group based on the code provided
router.post('/invite-from-code/:code',orgController.inviteFromAccessCode)

module.exports = router;