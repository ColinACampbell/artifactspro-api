const express = require('express');
const router = express.Router();
const db = require('./../config/db');
const fs = require('fs');
const path = require('path')
const config = require('./../config/config')

const fileTypes = {
    'application/msword': 'doc',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
    'image/jpeg': 'jpg',
    'image/png' : 'png'
};

// Get documents from artifact
router.get('/from-art/:artID', (req, res) => {
    let artifactID = req.params.artID;
    // write code to check on the user id, prevent any other user from getting access to the resource purposefully or accidentally
    db.query('SELECT doc_id, version, comment, user_id, date_uploaded, date_modified, art_id, type FROM documents WHERE art_id = $1', [artifactID],
        (err, result) => {
            if (err) throw err;
            let docs = result.rows;
            res.status(200).json(docs);
        })
})

router.post('/upload/:artID', (req, res) => {

    let artID = req.params.artID;
    let userID = req.session.userInfo.user_id;
    let dateModified = req.body.date_modified;
    let dateUploaded = req.body.date_uploaded;
    let data = req.body.data;
    let version = req.body.version;
    let comment = req.body.comment;
    let fileType = req.body.file_type;

    let base64Data = data.split(',')[1];

    let buffer = Buffer.from(base64Data, "base64"); // convert the file buffer
    //fs.writeFileSync(`temp/${version}.${fileTypes[fileType]}`, buffer);

    db.query(`INSERT INTO documents
    ("version", "comment", user_id, "data", date_uploaded, date_modified, art_id, "type")
    VALUES($1, $2, $3, $4, $5, $6, $7, $8);
    `, [version, comment, userID, buffer, dateUploaded, dateModified, artID, fileType],
        (err, result) => {
            if (err) throw err;

            //fs.mkdirSync('temp')
            res.status(200).json({ message: 'ok' });
        })
})

const unoconv = require('awesome-unoconv');
router.post("/link/:artID/:docID", (req, res, next) => {

    let code = 200
    if (!req.session.userInfo)
        code = 401;
    // TODO : AUTH user

    const artID = req.params.artID;
    const docID = req.params.docID;
    const dir = `./docs/preview/${artID}`; // the directory for which the doc will be in

    if (!fs.existsSync(dir))
        fs.mkdirSync(dir, { recursive: true });


    // doc id will act as the file name with the extenstion so docid.file_ext
    db.query('SELECT * FROM documents WHERE doc_id = $1', [docID],
        (err, results) => {

            if (err) throw err;

            let doc = results.rows[0];

            let filePath = `${dir}/${docID}.${fileTypes[doc.type]}`

            if (!fs.existsSync(filePath))
                fs.writeFileSync(filePath, doc.data);

            let test = true;
            let serverhost = test ? 'http://localhost:3000': config.host
            res.status(code).json({
                download: `${serverhost}/api/docs/preview/${artID}/${docID}.${fileTypes[doc.type]}`
            });

        })
})

// @ :doc = docID + file extension
router.get('/preview/:artID/:docName', (req, res) => {
    let doc = req.params.docName;
    let artID = req.params.artID;
    const link = path.join(__dirname, `../docs/preview/${artID}/${doc}`);
    res.sendFile(link);
})

module.exports = router;