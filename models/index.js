const dbConfig = require('../configs/database');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.items = require('./item.model.js')(sequelize, Sequelize);

module.exports = db;