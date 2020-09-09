const config = require('./config/config')
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
const chatsRoute = require('./routes/chats')

// Middlewares
const userMiddleware = require('./middleware/user');
const authMiddleware = require('./middleware/auth');

//require('./config/mail')

const server = http.createServer(app);
const socketIO = io.listen(server);

socketIO.on('connect',(socket)=>{
    console.log("Socket Connected")
    socket.on("join_room",(internalChatID)=>{
        console.log(`A user joined Room ${internalChatID}`)
        socket.join(`${internalChatID}`)
    })
    socket.on("internal_message",(val)=>{
        
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
        maxAge: (10 * 10 * 399 * 30 * 34 + 3400) - 5
    }
}))

app.use(express.json({ limit: '50mb' }));
app.use('/', express.static(staticPath))

app.use('/api/art',authMiddleware);
app.use('/api/members/',authMiddleware);
app.use('/api/workspace/',authMiddleware);
app.use('/api/chats/',authMiddleware)

//app.use('/api/user/',userMiddleware.userInformation) // TODO : Test end points that use this middleware
app.use('/api/user/signup/process-1', userMiddleware.password); // middleware to hash password on user routes
app.use('/api/user/login', userMiddleware.password); // middleware to hash password on user routes
app.use('/api/user/', userRoute);
app.use('/api/org/', organizationRoute);
app.use('/api/art/', artifactsRoute);
app.use('/api/docs/', documentsRoute); 
app.use('/api/members/',membersRoute);
app.use('/api/workspace/',workspaceRoute);
app.use('/api/chats/',chatsRoute) 

app.get("/*", (req, res) => {
    res.sendFile(staticPath + "/index.html");
    //res.json({mess:"Hello World"})
})

const port = process.env.PORT || 3000;
server.listen(port, (err) => {
    if (err) throw err;
    console.log("Server Started");
}) 