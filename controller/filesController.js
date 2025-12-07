//@desc Post a file
//@route POST /api/upload
//@access public
const uploadFile = async (req,res) => {
    res.json({message: 'Upload a file (auth required)'})
}

//@desc Get all public files
//@route GET /api/public-file
//@access public
const getPublicFile = async (req,res) => {
    res.json({message: 'Retieve all public files'})
}

//@desc Get my files
//@route GET /api/my-files
//@access public
const getMyFile = async (req,res) => {
    res.json({message: "Retrive logged-in user's files"})
}

//@desc Download a file
//@route GET /api/files/:id/download
//@access public
const downloadFile = async (req,res) => {
    res.json({message: "Download file (permission check)"})
}

//@desc Delete a file
//@route Delete /api/files/:id
//@access public
const deleteFile = async (req,res) => {
    res.json({message: 'Delete file (owner only)'})
}

module.exports = {
    uploadFile,
    getPublicFile,
    getMyFile,
    downloadFile,
    deleteFile
}