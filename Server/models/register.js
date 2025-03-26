const mongoose=require('mongoose')

const registerSchema=new mongoose.Schema({
    username:{
        type :String,
        required:true
    },
    gender:{
        type :String,
        enum:['male', 'female', 'other'],
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('Register',registerSchema)