const mongoose =require('mongoose')

const connectDB=()=>{
    try {
        mongoose.connect('mongodb://localhost:27017/UserProfile')
    .then(() => console.log('MongoDB connected'))
        
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
}

module.exports=connectDB
