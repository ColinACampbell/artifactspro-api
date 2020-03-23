const express = require('express')
const app = express();

const staticPath = __dirname+'/static';
app.use('/',express.static(staticPath))

app.get("/*",(req,res)=>
{
    res.sendFile(staticPath+"/index.html");
})

const port = 3000 || process.env.PORT;

app.listen(port,(err)=>{
    if (err) throw err;
    console.log(err);
})