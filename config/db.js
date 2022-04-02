const { Client } = require('pg');
const config = require('./configControl')

const client = new Client(config.postgres)

client.connect((err)=>{
    console.log(err)
    if (err !== null);
        console.log(err)
});

module.exports = client;