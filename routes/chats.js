const express = require('express');
const router = express.Router();
const db = require("./../config/db")

router.get("/active-chats", async (req,res)=>{
    const userID = req.session.userInfo.user_id;
    const query = `select crm.chat_room_id, 
    (select cm.chat_message_id from chat_messages cm where cm.chat_room_id = crm.chat_room_id order by cm.chat_message_id desc limit 1) as chat_message_id,
    (select chat_message_text from chat_messages cm where cm.chat_room_id = crm.chat_room_id order by cm.chat_message_id desc limit 1) as chat_message_text,
    (select sender_id from chat_messages cm where cm.chat_room_id = crm.chat_room_id order by cm.chat_message_id desc limit 1) as sender_id,
    (select reciever_id from chat_messages cm where cm.chat_room_id = crm.chat_room_id order by cm.chat_message_id desc limit 1) as reciever_id,
    (select "timestamp" from chat_messages cm where cm.chat_room_id = crm.chat_room_id order by cm.chat_message_id desc limit 1) as "timestamp",
    (select concat(users.first_name,' ',users.last_name) from chat_messages cm 
    inner join users on users.user_id = cm.sender_id where cm.chat_room_id = crm.chat_room_id
    order by cm.chat_message_id desc limit 1) as sender_name,
    (select concat(users.first_name,' ',users.last_name) from chat_messages cm 
    inner join users on users.user_id = cm.reciever_id where cm.chat_room_id = crm.chat_room_id
    order by cm.chat_message_id desc limit 1) as reciever_name
    from chat_room_members crm where crm.user_id = $1 order by chat_message_id desc `

    const results = await db.query(query,[userID]);
    let chats = results.rows;
    res.status(200).json(chats);
})


router.get("/:chatRoomID/load-messages", async (req,res)=>{
    const chatRoomID = req.params.chatRoomID;
    const chats = await db.query("select * from chat_messages cm where cm.chat_room_id = $1",[chatRoomID]);
    res.status(200).send(chats.rows);
})

router.post("/send-message", async (req,res)=>{

    const query = `INSERT INTO chat_messages
    (chat_message_text, "timestamp", chat_room_id, sender_id, reciever_id,"createdAt","updatedAt")
    VALUES($1, $2, $3, $4, $5, $6, $7);`

    const {chatText, chatRoomID, timestamp, toUser, fromUser } = req.body;

    await db.query(query,[chatText,timestamp,chatRoomID,fromUser,toUser, new Date(), new Date()]).catch((err)=> console.log(err));

    res.status(201).json({})
})

module.exports = router