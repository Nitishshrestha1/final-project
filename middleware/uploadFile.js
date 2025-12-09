const multer = require('multer')

const storage = multer.diskStorage ({
    destination: './uploads',
    filename: (req,res,cb) => {
        return cb(req.body.filename)
    }
})

const upload = multer({storage})

module.exports = upload;