const devCfg = require('./dev.json');
const prodCfg = require('./prod.json');

const prod = false;

let config;
if (prod)
	config = prodCfg
else
	config = devCfg

config.dev = !prod; // for in controller purposes
module.exports = config;