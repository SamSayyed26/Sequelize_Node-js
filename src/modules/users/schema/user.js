const { body } = require('express-validator');

const userSchema = {
    createUser: [
        body('firstName').trim().notEmpty().withMessage('First Name is required').isString().withMessage('First Name must be a string').isAlpha().withMessage("First Name cannot contain numbers"),
        body('lastName').trim().notEmpty().withMessage('Last Name is required').isString().withMessage('Last Name must be a string').isAlpha().withMessage("Last Name cannot contain numbers"),
        body('email').trim().notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email format'),
        body('password').trim().notEmpty().withMessage('Password is required'),
    ],
    // updateUser: [
    //     body('firstName').trim().optional().withMessage('First Name is required').isString().withMessage('First Name must be a string'),
    //     body('lastName').trim().optional().withMessage('Last Name is required').isString().withMessage('Last Name must be a string'),
    //     body('email').trim().optional().withMessage('Email is required').isEmail().withMessage('Invalid email format'),
    //     body('password').trim().optional().withMessage('Password is required'),
    // ]
}

module.exports = userSchema