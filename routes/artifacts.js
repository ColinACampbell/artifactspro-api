const express = require('express');
const router = express.Router();
const artifactsController = require("./../controllers/artifacts")
const authMiddleware = require('./../middleware/authenticate')


// Get all artifacts from org id in sessions
// TODO : Update client : jwt
router.get('/',artifactsController.getAll);

// Create artifact
router.post('/create',artifactsController.create)

// Get specific artifacts
router.get('/:artID',artifactsController.getFromID)

// delete artifact from id
router.delete('/delete/:artID',artifactsController.deleteArtifactFromID)

module.exports = router;