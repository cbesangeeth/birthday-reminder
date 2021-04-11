const router = require('express').Router();
const userService = require('../../service/user.service.js');

console.log('inside user handler');


router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/1', async (req, res, next) => {
    console.log('inside user service get');

    userService.getUsers(req, res, next);
});



module.exports = router;