const db = require("./../models/index")

async function setUpModels()
{
    await db.users.sync({alter:true})
    await db.organizations.sync({alter:true})
    await db.organization_members.sync({alter:true})
    await db.artifacts.sync({alter:true})
    await db.documents.sync({alter:true})
    await db.work_spaces.sync({alter:true})
    await db.work_space_members.sync({alter:true})
    await db.work_space_messages.sync({alter:true})
    await db.work_space_artifacts.sync({alter:true});
    await db.workspace_art_access_users.sync({alter:true})
    await db.work_space_message_replies.sync({alter:true});
    await db.work_space_artifacts.sync({alter:true});
    await db.chat_rooms.sync({alter:true})
    await db.chat_room_members.sync({alter:true})
    await db.chat_messages.sync({alter:true})
    await db.work_space_references.sync({alter:true})
    await db.work_space_ref_items.sync({alter:true})
    await db.organization_pricing_packages.sync({alter:true})
}

async function setUpModelsGeneral()
{
    await db.sequelize.sync({alter:true})
}

( async()=>{
    await setUpModelsGeneral()
})()
