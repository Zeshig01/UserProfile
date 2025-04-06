const express=require('express');
const router=express.Router();
const upload=require('../middleware/upload');
const { getUser, addUser } = require('../controller/user.controller');
router.get('/getUser', getUser)
router.post('/postUser',upload.single('profileImage'),addUser)
module.exports = router;