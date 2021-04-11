const users = require('../models').users;

exports.getUserList = async(userId) => {
    return await users.findAll();
}