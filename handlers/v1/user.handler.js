const router = require('express').Router();
const userService = require('../../service/user.service.js');

router.get('/', async (req, res, next) => {

    userService.getUsers(req, res, next);
});

router.post('/', async (req, res, next) => {

    userService.addUser(req, res, next);
});



module.exports = router;