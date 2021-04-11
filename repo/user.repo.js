const users = require('../models').users;

exports.getUserList = async (userId) => {
    return await users.findAll();
}

exports.saveUser = async (userData) => {
    return await users.create(userData, {
        returning: true,
        plain: true
    });
}