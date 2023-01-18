const express = require('express')
const router = express.Router();
const {
    loginUser,
    registerUser,
    getMe
} = require('../controllers/userController');

router.post('/login', loginUser);
router.post('/', registerUser);
router.get('/me', getMe);
module.exports = router