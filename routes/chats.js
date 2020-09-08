const express = require('express');
const router = express.Router();

router.get("/active-chats",(req,res)=>{
    const userID = req.session.userInfo.user_id;
    console.log(userID);
    res.status(200).json({});
})

module.exports = router