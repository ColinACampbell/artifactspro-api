const express = require('express');
const router = express.Router();
const orgController = require('./../controllers/organization')
const authMiddleware = require("./../middleware/authenticate")

router.post('/create',authMiddleware,orgController.createOrg);

// TODO : Update client
router.get('/info',authMiddleware,orgController.info)

router.put('/info',authMiddleware,orgController.changeOrgInfo)

router.get('/info-from/access-code/:accessCode',orgController.infoFromAccessCode)

// TODO : Update client
// Adds user to a group based on the code provided
router.post('/invite-from-code/:code',authMiddleware,orgController.inviteFromAccessCode)

router.get('/',authMiddleware,orgController.getAll)

router.post('/switch',authMiddleware,orgController.switchOrganization)

module.exports = router;