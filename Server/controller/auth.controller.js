const Register = require('../models/register')
const jwt=require('jsonwebtoken')
const bcrypt = require('bcrypt');
const SECRET_KEY = "khsdfoiokjkn1231234231"; 
const register=async(req, res)=>{
    try {
        const { username, gender, email, password } = req.body;
        const existEmail = await Register.findOne({ email });
        if (existEmail) {
            return res.status(401).json({ message: 'Email already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10); 
        const addUser = new Register({ username, gender, email ,password:hashedPassword});
        await addUser.save();
        const token=jwt.sign({userId:addUser._id,email:addUser.email},SECRET_KEY,{expiresIn:'1h'})
        return res.status(201).json({ message: 'Registration successful', user: addUser, token });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Server Error' });
    }
}
const login=async(req,res)=>{
    try {
        const {email,password}=req.body
        const user = await Register.findOne({ email });
        if(!user){
            return res.status(400).json({message:"User not Found"})
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid password" });
        }
        const token=jwt.sign({userId:user._id,email:user.email},SECRET_KEY,{expiresIn:'1h'})
        return res.status(200).json({ message: "Login successful", token ,user: {
            id: user._id,
            email: user.email,
            username: user.username,
            gender: user.gender
        }});

    } catch (error) {
        return res.status(500).json({ message: 'Server Error' });

    }
}
module.exports = { register,login  };
