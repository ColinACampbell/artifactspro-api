const devCfg = require('./dev.json');
const prodCfg = require('./prod.json');

const prod = true;

let config;
if (prod)
	config = prodCfg
else
	config = devCfg

module.exports = config;