var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var config = require('../config');

// var sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, config.db);


const sequelize = new Sequelize(`${config.db.databaseUri}?sslmode=require`, {
    // url: process.env.DATABASE_URI,
    url: config.db.databaseUri,
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // very important
      }
    }
  });

var db = {};


fs.readdirSync(__dirname).filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
}).forEach(function(file) {
    var model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes) //sequelize.import(path.join(__dirname, file));
    if (config.db.schema && config.db.schema.length > 0) {
        model = model.schema(config.db.schema);
    }
    db[model.name] = model;
});

Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;


module.exports = db;