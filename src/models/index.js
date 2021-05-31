'use strict';

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
  }
)

const db = {
  User: require('./User')(sequelize, Sequelize.DataTypes),
  Role: require('./Role')(sequelize, Sequelize.DataTypes),
  UserRoleXref: require('./UserRoleXref')(sequelize, Sequelize.DataTypes),
  CodeHeader: require('./CodeHeader')(sequelize, Sequelize.DataTypes),
  CodeValue: require('./CodeValue')(sequelize, Sequelize.DataTypes),
  sequelize,
  Sequelize,
};

Object.keys(db).forEach(modelName => {
  if (!modelName.startsWith('sequelize') && !modelName.startsWith('Sequelize')) {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  }
});

module.exports = db;
