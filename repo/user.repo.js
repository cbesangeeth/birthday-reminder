const users = require('../models').users;

exports.getUserList = async (userId) => {
    return await users.findAll({
        order: [
            ['id', 'asc']
        ]
    });
}

exports.saveUser = async (userData) => {
    return await users.create(userData, {
        returning: true,
        plain: true
    });
}