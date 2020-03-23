const { Client } = require('pg');
const client = new Client({
    host : "localhost",
    database : "artifactspro",
    user : "postgres",
    password : "wedered.200"
})

client.connect((err)=>{
    if (err) throw err;
});

client.query(`CREATE TABLE IF NOT EXISTS public.users (
	user_id serial NOT NULL,
	"password" text NOT NULL,
	last_name text NULL,
	first_name text NULL,
	email text NOT NULL,
	is_verified char(1) NULL,
	CONSTRAINT user_pk PRIMARY KEY (user_id)
);`,(err,res)=>{
    if (err) throw err;
})

module.exports = client;