const { Client } = require('pg');
const config = require('./config')

const client = new Client(config.postgres)

client.connect((err)=>{
    if (err) throw err;
});

let setUp = async function() 
{
	let oranizationSetup = 	`
	CREATE TABLE IF NOT EXISTS organizations (
		user_id int8 NOT NULL,
		org_id serial NOT NULL,
		"name" text NOT NULL,
		"type" text NOT NULL,
		org_key text NOT NULL,
		org_code text NOT NULL,
		CONSTRAINT org_pk PRIMARY KEY (org_id)
	);
	-- public.organizations foreign keys
	
	ALTER TABLE public.organizations ADD CONSTRAINT organizations_fk FOREIGN KEY (user_id) REFERENCES users(user_id);`

	let usersSetup = `CREATE TABLE IF NOT EXISTS public.users (
		user_id serial NOT NULL,
		"password" text NOT NULL,
		last_name text NULL,
		first_name text NULL,
		email text NOT NULL,
		is_verified char(1) NULL,
		CONSTRAINT user_pk PRIMARY KEY (user_id)
	);`
	// create table users
	await client.query(usersSetup,(err,res)=>{
		if (err) throw err;
	})

	await client.query(oranizationSetup)

}

//setUp();

module.exports = client;