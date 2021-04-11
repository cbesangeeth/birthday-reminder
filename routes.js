module.exports = function (app) {
    app.use(``, require('./handlers/v1/index'));

    app.use(`/users`, require('./handlers/v1/user.handler'));
};
