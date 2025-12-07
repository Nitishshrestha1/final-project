const asyncHandler = require('express-async-handler')
const filelist = require('../models/fileModel')

//@desc Post a file
//@route POST /api/upload
//@access public
const uploadFile = asyncHandler(async (req,res) => {
    console.log(req.body)
    const {filename,filepath, size, uploader, privacy} = req.body;
    if(!filename || !filepath || !size || !uploader || !privacy) {
        res.status(400);
        throw new Error("All fields are mandatory !")
    }

    const newfile = await filelist.create({
        filename,
        filepath, 
        size, 
        uploader, 
        privacy
    })

    res.status(201).json({newfile})
})

//@desc Get all public files
//@route GET /api/public-file
//@access public
const getPublicFile = asyncHandler(async (req,res) => {
    res.json({message: 'Retieve all public files'})
})

//@desc Get my files
//@route GET /api/my-files
//@access public
const getMyFile = asyncHandler(async (req,res) => {
    res.json({message: "Retrive logged-in user's files"})
})

//@desc Download a file
//@route GET /api/files/:id/download
//@access public
const downloadFile = asyncHandler(async (req,res) => {
    res.json({message: "Download file (permission check)"})
})

//@desc Delete a file
//@route Delete /api/files/:id
//@access public
const deleteFile = asyncHandler(async (req,res) => {
    res.json({message: 'Delete file (owner only)'})
})

module.exports = {
    uploadFile,
    getPublicFile,
    getMyFile,
    downloadFile,
    deleteFile
}