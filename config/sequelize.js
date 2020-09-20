const db = require("./../models/index")

async function setUpModels()
{
    await db.users.sync()
    await db.organizations.sync()
    await db.organization_members.sync()
    await db.artifacts.sync()
    await db.documents.sync()
    await db.work_spaces.sync()
    await db.work_space_members.sync()
    await db.work_space_messages.sync()
    await db.work_space_artifacts.sync();
    await db.work_space_message_replies.sync();
    await db.work_space_artifacts.sync();
    await db.chat_rooms.sync()
    await db.chat_room_members.sync()
    await db.chat_messages.sync()
}

//setUpModels()

db.users.findAll().then((users)=>{
    console.log(users[0].email)
})