const mongoose = require('mongoose')

const fileSchema = mongoose.Schema({
    filename: {
        type: String,
        require: [true, 'Filename is required']
    },
    filepath: {
        type: String,
        require: [true, 'Filepath is required']
    },
    size: {
        type: Number,
        require: [true, 'Size of file is not there'],
        max: 20*1025*1024,
    },
    uploader: {
        type: String,
        require: [true, 'Uploader name is required']
    },
    privacy: {
        type: String,
        enum: ['private', 'public'],
        default: 'private'
    },
}, {
    timestamps: true,
}) 

module.exports = mongoose.model('filelist', fileSchema);