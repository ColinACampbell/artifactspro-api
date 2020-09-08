const express = require('express');
const router = express.Router();
const db = require("./../config/db")

router.get("/active-chats", async (req,res)=>{
    const userID = req.session.userInfo.user_id;
    const query = `select 
    icm.from_user as sender_id, icm.to_user as reciever_id, chat_text,icm."timestamp",
    CONCAT(sender.first_name,' ', sender.last_name) as sender__name,
    CONCAT(reciever.first_name,' ', reciever.last_name) as reciever_name
    from internal_chat_messages as icm
    inner join users as sender on sender.user_id = icm.from_user 
    inner join users as reciever on reciever.user_id = icm.to_user 
    where icm.from_user = $1 or icm.to_user = $1`
    console.log(userID);

    const results = await db.query(query,[userID]);
    let chats = results.rows;
    res.status(200).json(chats);

})

module.exports = router