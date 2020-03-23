const express = require('express')
const app = express();

const staticPath = __dirname+'/static';
app.use('/',express.static(staticPath))

app.get("/*",(req,res)=>
{
    //res.sendFile(staticPath+"/index.html");
    res.json({mess:"Hello World"})
})

app.listen(3000 || process.env.PORT,(err)=>{
    if (err) throw err;
    console.log("Server Started");
})