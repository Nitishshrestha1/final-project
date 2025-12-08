const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

//@desc Register a new user
//@route POST /api/register
//@access public
const registerUser = asyncHandler(async (req,res) => {
    const {
        username,
        email,
        password
    } = req.body

    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const userAvailable = await User.findOne({email});
    if(userAvailable) {
        res.status(400);
        throw new Error("User already registered!");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Hashed password: ', hashedPassword)

    const user = await User.create({
        username,
        email,
        password
    })

    console.log(`User created ${user}`);
    if(user) {
        res.status(201).json({_id: user.id, email: user.email});
    }
    else {
        res.status(400)
        throw new Error("User data is not valid");
    }
})

//@desc login user
//@route POST /api/login
//@access public
const loginUser = asyncHandler(async (req,res) => {
    res.json({message: 'Log in and receive a token'})
})

module.exports = {
    registerUser,
    loginUser
}