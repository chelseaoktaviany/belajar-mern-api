const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler');
const User = require('../model/userModel');

//  @desc       Authenticate users
//  @route      POST /api/users/login
//  @access     Private
const loginUser = asyncHandler(async(req, res) => {
    res.status(200).json({
        message: 'Login user',
    })
});

//  @desc       Register new user
//  @route      POST /api/users
//  @access     Private
const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body

    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    // check if user exists
    const userExists = await User.findOne({email})

    if(userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // hashing password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
});

//  @desc       Get user data
//  @route      POST /api/users/me
//  @access     Private
const getMe = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: 'User data display',
    })
});

module.exports = {
    loginUser,
    registerUser,
    getMe
}