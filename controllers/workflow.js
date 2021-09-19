const db = require('./../config/db')

exports.createDocumentTag = (req, res) => {
    const { name, color, orgID } = req.body;
    db.query(`INSERT INTO public.document_tags
    ("name", color, "createdAt", "updatedAt", org_id)
    VALUES($1, $2, $3, $4, $5);    
    `,[name,color,new Date(),new Date(),orgID]).then((results)=>{
        res.status(201).json({});
    });
}