const express = require('express');
const router = express.Router();
const documentController = require('./../controllers/documents')

router.get('/download',documentController.download)

// Get documents from artifact
router.get('/:artID',documentController.docFromArtFromID);

router.get("/search/:artID",documentController.search)

router.post('/upload/:artID',documentController.upload);

router.post("/link/:artID/:docID",documentController.getLink)

// @ :doc = docID + file extension
router.get('/preview/:artID/:docName', documentController.preview)

router.delete('/delete/:docID',documentController.deleteDocument)


module.exports = router;