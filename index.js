require('./config/db')
const express = require('express')
const cors = require('cors');
const app = express();
const userRoute = require('./routes/user');

const staticPath = __dirname+'/static';

app.use(cors(
    {
        origin : 'http://localhost:4200',
        credentials : true
    }
))
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