const db = require("./../models/index")

async function setUpModels(alter,force,logging)
{
    await db.organization_pricing_packages.sync({alter,force,logging})
    await db.users.sync({alter,force,logging})
    await db.organizations.sync({alter,force,logging})
    await db.organization_members.sync({alter,force,logging})
    await db.artifacts.sync({alter,force,logging})
    await db.documents.sync({alter,force,logging})
    await db.work_spaces.sync({alter,force,logging})
    await db.work_space_members.sync({alter,force,logging})
    await db.work_space_messages.sync({alter,force,logging})
    await db.work_space_artifacts.sync({alter,force,logging});
    await db.workspace_art_access_users.sync({alter,force,logging})
    await db.work_space_message_replies.sync({alter,force,logging});
    await db.work_space_artifacts.sync({alter,force,logging});
    await db.chat_rooms.sync({alter,force,logging})
    await db.chat_room_members.sync({alter,force,logging})
    await db.chat_messages.sync({alter,force,logging})
    await db.work_space_references.sync({alter,force,logging})
    await db.work_space_ref_items.sync({alter,force,logging})
    await db.document_tags.sync({alter,force,logging})    
}

async function setUpModelsGeneral()
{
    await db.sequelize.sync({alter:true,logging:console.log})
}

( async()=>{
    await setUpModels(false,true,console.log)
    //await setUpModelsGeneral()
})()
