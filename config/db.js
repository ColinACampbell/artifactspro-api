const { Client } = require('pg');
const config = require('./configControl')

const client = new Client(config.postgres)

client.connect((err)=>{
    if (err) throw err;
});

module.exports = client;