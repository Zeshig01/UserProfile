 
 const mongoose=require('mongoose')
 const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true, 
    },
    email: {
        type: String,
        required: true,
        unique: true, 
    },
    profileImage: {
        type: String, 
    },
});

module.exports = mongoose.model('User', userSchema);