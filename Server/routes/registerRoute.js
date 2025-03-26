// const express=require('express');
// const Register = require('../models/register');
// const router=express.Router()

// router.post('/',async(req,res)=>{

//     try {
        
//         const {username,gender, email}=req.body
//         const existEmail = await Register.findOne({ email });  // ✅ Returns a single document or null
//         if(existEmail){
//             return res.status(401).json({message:'Email already exist'})
//         }
//     const addUser=new Register({
//     username,gender, email
//     })
//     await addUser.save();

//     } catch (error) {
//         console.log(error)
//         return res.status(500).json({message:'Server Error'})
        
//     }


// })
// module.exports = router; 


const express = require('express');
const Register = require('../models/register');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { username, gender, email, password } = req.body;
        const existEmail = await Register.findOne({ email });
        if (existEmail) {
            return res.status(401).json({ message: 'Email already exists' });
        }
        const addUser = new Register({ username, gender, email ,password});
        await addUser.save();
        return res.status(201).json({ message: 'Registration successful', user: addUser }); // Add this!
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;