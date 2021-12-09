const cloudinary = require('cloudinary')
const fs = require('fs')

const uploadFile = (req, res) => {
    const result = await cloudinary.uploader.upload(req.files.image.tempFilePath, {
        use_filename: true,
        folder: 'idk what to put here ill ask Mr. Peck later :)'
    })
    fs.unlinkSync(req.files.image.tempFilePath)
    res.status(200).json({ image: {src: result.secure_url} });
}

module.exports = uploadFile;