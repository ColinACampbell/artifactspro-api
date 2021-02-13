const express = require('express');
const router = express.Router();
const artifactsController = require("./../controllers/artifacts")

// Get all artifacts from org id in sessions
router.get('/',artifactsController.getAll);

router.get("/get-by-workspace",artifactsController.getByWorkspace)

router.get("/search-by-workspace",artifactsController.searchByWorkspace)

router.get('/search',artifactsController.search)

// Create artifact
router.post('/create',artifactsController.create)

router.put('/:artID/change-name-and-description',artifactsController.changeNameAndDescription)

// Get specific artifacts
router.get('/:artID',artifactsController.getFromID)

router.get('/:artID/permissions',artifactsController.getPermissionsForArtifact)

router.get('/:artID/total-size',artifactsController.getStorageSize);

// delete artifact from id
router.delete('/delete/:artID', artifactsController.deleteArtifactFromID)

module.exports = router;