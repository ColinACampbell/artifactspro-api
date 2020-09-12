const express = require('express');
const router = express.Router();
const db = require("./../config/db")

router.get("/active-chats", async (req,res)=>{
    const userID = req.session.userInfo.user_id;
    const query = `select distinct 
    MAX(icm.internal_chat_msg_id),
    icm."timestamp", icm.chat_text,
    ic.internal_chat_id, ic.user_one, 
    icm.from_user as sender_id, icm.to_user as reciever_id,
    CONCAT(sender.first_name,' ', sender.last_name) as sender_name,
    CONCAT(reciever.first_name,' ', reciever.last_name) as reciever_name
    from internal_chats as ic 
    inner join internal_chat_messages as icm on icm.internal_chat_id = ic.internal_chat_id 
    inner join users as reciever on reciever.user_id = icm.to_user 
    inner join users as sender on sender.user_id = icm.from_user 
    where icm.from_user = $1 or icm.from_user = $1 group by icm."timestamp", icm."timestamp", icm.chat_text,
    ic.internal_chat_id, ic.user_one, icm.from_user, icm.to_user, sender.first_name, sender.last_name, reciever.first_name, reciever.last_name`

    console.log(userID);

    const results = await db.query(query,[userID]);
    let chats = results.rows;
    console.log(chats)
    res.status(200).json(chats);

})

router.get("/:internalChatID/load-messages", async (req,res)=>{
    const internalChatID = req.params.internalChatID;
    console.log(internalChatID);
    const results = await db.query("select * from internal_chat_messages as icm where icm.internal_chat_id = $1",[internalChatID]);
    res.status(200).send(results.rows);
})

router.post("/send-message", async (req,res)=>{
    const query = `INSERT INTO internal_chat_messages
    (chat_text, internal_chat_id, "timestamp", to_user, from_user)
    VALUES($1, $2, $3, $4, $5);`

    const {chatText, internalChatID, timestamp, toUser, fromUser } = req.body;

    const results = await db.query(query,[chatText,internalChatID,timestamp,toUser,fromUser]);
    console.log(results);

    res.status(201).json({})
})

module.exports = router