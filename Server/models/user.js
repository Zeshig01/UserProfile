 
 const mongoose=require('mongoose')
 const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true, 
    },
    email: {
        type: String,
        required: true,
     },
    profileImage: {
        type: String, 
    },
    position: { 
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    name: {
        type: String,
        unique: true,
        required: true
    },
    fathername: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('User', userSchema);