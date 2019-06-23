const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/register', (req, res) => {
    let hasErrors = false;
    let errors = [];

    if (!req.body.name) {
        errors.push({ 'name': 'Name not received' })
        hasErrors = true;
    }
    if (!req.body.email) {
        errors.push({ 'email': 'Email not received' })
        hasErrors = true;
    }
    if (!req.body.password) {
        errors.push({ 'password': 'Password not received' })
        hasErrors = true;
    }

    if (hasErrors) {
        //if there is any missing field
        res.status(422).json({
            message: "Invalid input",
            errors: errors
        });

    } else {
        res.status(201).json({
            message: 'User created!',
            errors: errors
        });
    }

});

router.post('/login', (req, res, next) => {
    let hasErrors = false;
    let errors = [];

    if (!req.body.email) {
        errors.push({ 'email': 'Email not received' })
        hasErrors = true;
    }
    if (!req.body.password) {
        errors.push({ 'password': 'Password not received' })
        hasErrors = true;
    }

    if (hasErrors) {
        //return error code an info
        res.status(422).json({
            message: "Invalid input",
            errors: errors
        });

    } else {
        //check if credentials are valid
        if (req.body.email == 'john@wick.com' && req.body.password == 'secret') {
            const token = jwt.sign(
                {
                    email: req.body.email,
                },
                process.env.JWT_KEY,
                {
                    expiresIn: "1h"
                }
            );
            res.status(200).json({
                message: 'Auth OK',
                token: token,
                errors: errors
            })
        } else {
            res.status(401).json({
                message: "Auth error"
            })
        }
    }
});

module.exports = router;