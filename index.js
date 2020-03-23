const express = require('express')
const app = express();

const staticPath = __dirname+'/static';
/**
app.use('/',express.static(staticPath))

app.get("/*",(req,res)=>
{
    //res.sendFile(staticPath+"/index.html");
    res.json({mess:"Hello World"})
})**/

app.get('/',(req,res)=>{
    res.json({mess:"Heya"})
})

const port = process.env.PORT || 3000;
console.log(port);
app.listen(port,(err)=>{
    if (err) throw err;
    console.log("Server Started");
})