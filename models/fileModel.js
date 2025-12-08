const mongoose = require('mongoose')

const fileSchema = mongoose.Schema({
    filename: {
        type: String,
        require: [true, 'Filename is required']
    },
    path: {
        type: String,
        require: [true, 'Filepath is required']
    },
    size: {
        type: Number,
        require: [true, 'Size of file is not there'],
        max: 20*1025*1024,
    },
    privacy: {
        type: String,
        enum: ['private', 'public'],
        default: 'private'
    },
    uploaded_by: {
        type: String,
        require: [true, 'Uploader name is required']
    },
    uploaded_at: {
        type: Date,
        default: Date.now
    }
}) 

module.exports = mongoose.model('filelist', fileSchema);