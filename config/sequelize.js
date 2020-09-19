const config = require('./configControl')
const userSchema = require('./../models/users')

const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize(config.postgres.database,config.postgres.user,config.postgres.password,{
    host : "localhost",
    dialect: "postgres"
})
sequelize.sync({ force: true });

async function testConnection()
{
    try {
         console.log(await sequelize.authenticate())
    } catch(err)
    {
        return err;
    }
}

let User = userSchema(sequelize,DataTypes)
console.log(User.findAll())
//testConnection()