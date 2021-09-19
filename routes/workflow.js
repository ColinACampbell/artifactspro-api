const express = require('express');
const workflowController = require('./../controllers/workflow');
const router = express.Router();



router.post("/document-tags",workflowController.createDocumentTag);

module.exports = router;