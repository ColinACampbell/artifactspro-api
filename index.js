const config = require('./config/configControl')
const express = require('express')
const app = express();
const http = require('http');
const io = require('socket.io')

const cors = require('cors');
const session = require('express-session');

const userRoute = require('./routes/user');
const organizationRoute = require('./routes/organization');
const artifactsRoute = require('./routes/artifacts');
const documentsRoute = require('./routes/documents')
const membersRoute = require('./routes/member');
const workspaceRoute = require('./routes/workspace');
const chatsRoute = require('./routes/chats');
const billingRoute = require('./routes/billing');
const miscRoute = require('./routes/misc')
// Middlewares
const userMiddleware = require('./middleware/user');
const authMiddleware = require('./middleware/authenticate');

//require('./config/mail')

const server = http.createServer(app);
const socketIO = io.listen(server);

socketIO.on('connect',(socket)=>{

    socket.on("join_room",(chatRoomID)=>{
        console.log(`A user joined Room ${chatRoomID}`)
        socket.join(`${chatRoomID}`)
    })

    socket.on("internal_message",(val)=>{
        console.log(val)
        socket.to(`${val.chatRoomID}`).emit("update_chat_room",val)
    })

    // Workspace sockets
    socket.on("join_workspace",(workspaceID)=>{
        socket.join(`workspace::${workspaceID}`)
    })

    socket.on("start_discussion",(workspaceID)=>{
        socket.broadcast.to(`workspace::${workspaceID}`).emit('update_workspace_discussion',workspaceID);
    })

    socket.on("join_discussion_thread",(messageID)=>{
        socket.join(`message_thread::${messageID}`)
    })

    // send message under a thread (discussion)
    socket.on("send_message_reply_to_discussion",(messageID)=>{
        socket.broadcast.to(`message_thread::${messageID}`).emit('update_discussion_message_thread',messageID)
    })

})


const staticPath = __dirname + '/static';

app.use(cors(
    {
        origin: config.host,
        credentials: true
    }
))

app.use(session({
    secret: "Ohhh no no no no and no",
    resave: true,
    saveUninitialized: true,
    cookie: {
        //secure : true, // Remove this when testing locally
        //maxAge: (10 * 10 * 399 * 30 * 34 + 3400) - 5,
        sameSite: 'none',
        //httpOnly : true,
    },
}))

app.use(express.json({ limit: '50mb' }));
app.use('/', express.static(staticPath))

app.use('/api/art',authMiddleware);
app.use('/api/members/',authMiddleware);
app.use('/api/workspace/',authMiddleware);
app.use('/api/chats/',authMiddleware)
app.use('/api/docs/',authMiddleware)

//app.use('/api/user/',userMiddleware.userInformation) // TODO : Test end points that use this middleware
app.use('/api/user/signup/process-1', userMiddleware.password); // middleware to hash password on user routes
app.use('/api/user/login', userMiddleware.password); // middleware to hash password on user routes
app.use('/api/misc/',miscRoute)
app.use('/api/user/', userRoute);
app.use('/api/org/', organizationRoute);
app.use('/api/art/', artifactsRoute);
app.use('/api/docs/', documentsRoute); 
app.use('/api/members/',membersRoute);
app.use('/api/workspace/',workspaceRoute);
app.use('/api/billing/',billingRoute)
app.use('/api/chats/',chatsRoute) 



app.get("/*", (req, res) => {
    res.sendFile(staticPath + "/index.html");
})

const port = process.env.PORT || 3000;
server.listen(port, (err) => {
    if (err) throw err;
    console.log("Server Started");
}) 

require('./config/sequelize')
