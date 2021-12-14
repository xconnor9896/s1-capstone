const cloudinary = require('cloudinary');
const fs = require('fs');

const uploadFile = async (req, res) => {
    const result = await cloudinary.uploader.upload(req.files.image.tempFilePath, {
        use_filename: true,
        folder: 'Sem-One-Capstone'
    })
    
    fs.unlinkSync(req.files.image.tempFilePath)
    res.status(200).json({ image: {src: result.secure_url} });
}

module.exports = uploadFile;