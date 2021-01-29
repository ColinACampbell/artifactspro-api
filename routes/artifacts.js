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

// Get specific artifacts
router.get('/:artID',artifactsController.getFromID)

// delete artifact from id
router.delete('/delete/:artID', artifactsController.deleteArtifactFromID)

module.exports = router;