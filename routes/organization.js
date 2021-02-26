const express = require('express');
const router = express.Router();
const orgController = require('./../controllers/organization')
const authMiddleware = require("./../middleware/authenticate")


// TODO : Update client
router.post('/create',authMiddleware,orgController.createOrg);

// TODO : Update client
router.get('/info',authMiddleware,orgController.info)

router.get('/info-from/access-code/:accessCode',orgController.infoFromAccessCode)

router.get("/test",(req,res)=>{
    res.send({num:10})
})

// TODO : Update client
// Adds user to a group based on the code provided
router.post('/invite-from-code/:code',authMiddleware,orgController.inviteFromAccessCode)

module.exports = router;