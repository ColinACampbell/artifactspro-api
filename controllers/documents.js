const db = require('./../config/db');
const fs = require('fs');
const path = require('path')
const config = require('./../config/configControl')
const encryptionUtil = require('./../utils/encryptionUtil');
const stream = require('stream');

const fileTypes = {
    'application/msword': 'doc',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'application/pdf': 'pdf'
};

exports.docFromArtFromID = (req, res) => {
    let artifactID = req.params.artID;
    // write code to check on the user id, prevent any other user from getting access to the resource purposefully or accidentally
    db.query(`SELECT doc_id, version, comment, documents.user_id, u2.email as user_email, concat(u2.first_name,' ',u2.last_name) as user_full_name , date_uploaded, date_modified, art_id, type, file_size FROM documents 
    inner join users u2 on u2.user_id = documents.user_id 
    WHERE art_id = $1`, [artifactID],
        (err, result) => {
            if (err) throw err;
            let docs = result.rows;
            res.status(200).json(docs);
        })
}

exports.search = (req, res) => {

    let { documentName, documentComments } = req.query;
    const { artID } = req.params;

    // convert undefined string into actual value
    if (documentName === 'undefined')
        documentName = undefined

    if (documentComments === 'undefined')
        documentComments = undefined

    if (documentName !== undefined && documentComments !== undefined) {
        const query = `SELECT doc_id, version, comment, documents.user_id, u2.email as user_email, concat(u2.first_name,' ',u2.last_name) as user_full_name , date_uploaded, date_modified, art_id, type, file_size FROM documents 
            inner join users u2 on u2.user_id = documents.user_id 
            WHERE "version" like '%' || $1 || '%' and "comment" like '%' || $2 || '%' and art_id = ${artID}`
        db.query(query, [documentName, documentComments], (err, results) => {
            if (err) throw err;
            res.status(200).json(results.rows)
        })
    } else if (documentName !== undefined) {
        const query = `SELECT doc_id, version, comment, documents.user_id, u2.email as user_email, concat(u2.first_name,' ',u2.last_name) as user_full_name , date_uploaded, date_modified, art_id, type, file_size FROM documents 
            inner join users u2 on u2.user_id = documents.user_id 
            WHERE "version" like '%' || $1 || '%' and art_id = ${artID}`
        db.query(query, [documentName], (err, results) => {
            if (err) throw err;
            res.status(200).json(results.rows)
        })
    } else if (documentComments !== undefined) {
        const query = `SELECT doc_id, version, comment, documents.user_id, u2.email as user_email, concat(u2.first_name,' ',u2.last_name) as user_full_name , date_uploaded, date_modified, art_id, type, file_size FROM documents 
            inner join users u2 on u2.user_id = documents.user_id 
            WHERE "comment" like '%' || $1 || '%' and art_id = ${artID}`
        db.query(query, [documentComments], (err, results) => {
            if (err) throw err;
            res.status(200).json(results.rows)
        })
    }
}


exports.upload = (req, res) => {

    let artID = req.params.artID;
    let userID = req.token_data.userInfo.user_id;
    let dateModified = req.body.date_modified;
    let dateUploaded = req.body.date_uploaded;
    let data = req.body.data;
    let version = req.body.version;
    let comment = req.body.comment;
    let fileType = req.body.file_type;
    const fileSize = req.body.fileSize // it's in bytes by default;

    let base64Data = data.split(',')[1];

    let buffer = Buffer.from(base64Data, "base64"); // convert the file buffer
    //fs.writeFileSync(`temp/${version}.${fileTypes[fileType]}`, buffer);
    //buffer = encryptionUtil.encryptBuffer(buffer);

    db.query(`INSERT INTO documents
    ("version", "comment", user_id, "data", date_uploaded, date_modified, art_id, "type","file_size","createdAt","updatedAt")
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);
    `, [version, comment, userID, buffer, dateUploaded, dateModified, artID, fileType, fileSize, new Date(), new Date()],
        (err, result) => {
            if (err) throw err;

            //fs.mkdirSync('temp')
            res.status(200).json({ message: 'ok' });
        })
}

exports.preview = (req, res) => {
    let doc = req.params.docName;
    let artID = req.params.artID;
    const link = path.join(__dirname, `../docs/preview/${artID}/${doc}`);
    res.sendFile(link);
}

// TODO : Update code to allow user to get the link only if they have access to the link
exports.getLink = (req, res, next) => {

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

            //const data = encryptionUtil.decryptBuffer(doc.data);

            if (!fs.existsSync(filePath)) // check if the file exists
                fs.writeFileSync(filePath, doc.data);

            // TODO Change this value whenever pushing to production
            // TODO make this more automated
            let serverhost = config.dev ? 'http://localhost:3000' : config.host

            res.status(200).json({
                download: `${serverhost}/api/docs/preview/${artID}/${docID}.${fileTypes[doc.type]}`
            });

        })
}


exports.download = (req, res) => {
    const artID = req.query.art; // aka artID
    const docID = req.query.id;

    db.query('SELECT * FROM documents WHERE doc_id = $1', [docID],
        (err, results) => {

            if (err) throw err;

            let doc = results.rows[0];

            const fileExtension = `.${fileTypes[doc.type]}`
            const fileName = `${doc.version}${fileExtension}`
            const fileType = doc.type

            res.writeHead(200, {
                'Content-Disposition': `attachment; filename="${fileName}"`,
                'Content-Type': fileType,
            })
            res.end(doc.data)
        })
}

exports.deleteDocument = (req, res) => {
    const docID = req.params.docID;
    db.query('DELETE FROM documents WHERE doc_id = $1', [docID], (err, result) => {
        if (err) throw err;
        res.json({ message: 'done' })
    })
}