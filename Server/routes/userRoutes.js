const express=require('express');
const router=express.Router();
const User=require('../models/user');
const upload=require('../middleware/upload')
router.get('/', async(req, res)=>{
    try {
        const users = await User.find(); 
        res.status(200).json(users); 
        
    } catch (error) {
        
    }
})
router.post('/user',upload.single('profileImage'),async(req,res)=>{
try {
    const {fullname , email} =req.body
    const addUser=new User({
        fullname, email,profileImage:req.file ? req.file.path : null
    })
    await addUser.save();
    res.status(201).json({ message: 'User created successfully', user: addUser });
        console.timeEnd('POST /user'); 
} catch (error) {
    console.error('Error in POST /user:', error.stack); // Log the full error stack
    res.status(500).json({ message: 'Internal server error' });
}
})
module.exports = router;