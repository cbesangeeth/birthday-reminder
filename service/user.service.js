const userRepo = require('../repo/user.repo');

exports.getUsers = async (request, response, next) => {
    try {
        console.log('inside user service');

        const users = await userRepo.getUserList();

        res.api.success = true;
        res.api.data = users;
        res.api.error = {};
        res.api.statusCode = 200;
        res.status(res.api.statusCode);

        return res.send(res.api);
    } catch (err) {
        console.log(err);
    }
};