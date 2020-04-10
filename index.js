const config = require('./config/config')
const express = require('express')
const cors = require('cors');
const app = express();
const session = require('express-session');

const userRoute = require('./routes/user');
const orgnanizationRoute = require('./routes/organization');
const artifactsRoute = require('./routes/artifacts');
const documentsRoute = require('./routes/documents')
const userMiddleware = require('./middleware/user');

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
//app.use('/api/user/',userMiddleware.userInformation) // TODO : Test end points that use this middleware
app.use('/api/user/', userMiddleware.password) // middleware to hash password on user routes
app.use('/api/user/', userRoute);
app.use('/api/org/', orgnanizationRoute);
app.use('/api/art/', artifactsRoute);
app.use('/api/docs/', documentsRoute); // TODO : Test these end points using postman


app.get("/*", (req, res) => {
    res.sendFile(staticPath + "/index.html");
    //res.json({mess:"Hello World"})
})

const port = process.env.PORT || 3000;
app.listen(port, (err) => {
    if (err) throw err;
    console.log("Server Started");
})