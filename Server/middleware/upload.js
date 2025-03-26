const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
const cloudinary=require('../config/cloudinary')

const storage=new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'user_profiles',
        allowedFormats: ['jpg', 'png', 'jpeg'],
    },
})

const upload=multer({storage})
module.exports = upload;