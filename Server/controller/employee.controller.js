const User=require('../models/user')

const getEmployee=async(req, res)=>{
try {
    const { name } = req.body; 
    const employee=await User.findOne({name})
    return res.status(401).json({message:'Successfully'})
    if (!employee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
} catch (error) {
    return res.status(501).json({message: `Internal Error ${error}`})
}
}

const addUser=async(req, res)=>{
    try {
        const {name, fathername , position, phone  , salary}=req.body
        const newEmployee=new User({
            name, fathername, position, phone, salary
        })
       await newEmployee.save();
       if (!employee) {
        return res.status(404).json({ message: 'Employee not found' })
       }
       return res.status(200).json({message:"Successfully Done "})

    } catch (error) {
        return res.status(500).json({message:"You have error "})        
    }
}
module.exports={addUser, getEmployee}