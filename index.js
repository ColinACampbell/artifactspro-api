const config = require('./config/config')
const express = require('express')
const cors = require('cors');
const app = express();
const userRoute = require('./routes/user');
const session = require('express-session');

const staticPath = __dirname+'/static';
console.log(config.host)
app.use(cors(
    {
        origin : config.host,
        credentials : true
    }
))

app.use(session({
    secret : "Ohhh no no no no and no",
    resave : true,
    saveUninitialized : true,
    cookie : {
        maxAge : (10 * 10 * 399 * 30 * 34 + 3400) - 5
    }
}))

app.use(express.json());
app.use('/',express.static(staticPath))
app.use('/api/user/',userRoute);

app.get("/*",(req,res)=>
{
    res.sendFile(staticPath+"/index.html");
    //res.json({mess:"Hello World"})
})

const port = process.env.PORT || 3000;
console.log(port);
app.listen(port,(err)=>{
    if (err) throw err;
    console.log("Server Started");
})