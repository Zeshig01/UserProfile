const User=require('../models/user')

const getUser=async(req,res)=>{
      try {
            const users = await User.find(); 
            res.status(200).json(users); 
            
        } catch (error) {
         console.log(error)   
        }
}

const addUser=async(req,res)=>{
    try {
        const {fullname , email} =req.body
        const addUser=new User({
            fullname, email,profileImage:req.file ? req.file.path : null
        })
        await addUser.save();
        res.status(201).json({ message: 'User created successfully', user: addUser });
            console.timeEnd('POST /user'); 
    } catch (error) {
        console.error('Error in POST /user:', error.stack); 
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports={addUser, getUser}