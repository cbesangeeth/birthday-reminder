const userRepo = require('../repo/user.repo');

exports.getUsers = async (req, res, next) => {
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
        next(err);
    }
};

exports.addUser = async (req, res, next) => {
    try {
        console.log('add user service');
        const userData = req.body;

        const users = await userRepo.saveUser(userData);

        res.api.success = true;
        res.api.data = users;
        res.api.error = {};
        res.api.statusCode = 200;
        res.status(res.api.statusCode);

        return res.send(res.api);
    } catch (err) {
        console.log(err);
        next(err);
    }
};
