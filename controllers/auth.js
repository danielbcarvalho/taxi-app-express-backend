const User = require('../model/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const jwtSecret = require('../config/jwtSecret')

exports.loginUser = async (req, res, next) => {
    const { email, password } = req.body

    const user = await User.findOne({ email: email })

    if (user) {
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if (isPasswordCorrect) {
            const token = jwt.sign(user.email, jwtSecret)

            return res.json({ token: token })
        }
        return res.send(`Password does not match email ${email}`)
    }
    return res.send(`The email ${email} does not exist`)
}

exports.createUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body

        if (await User.findOne({ email })) {
            const error = new Error(
                `An account with the mail ${email} already exists`
            );
            error.statusCode = 409;
            throw error;
        }

        const hashedPassword = await bcrypt.hash(password, 12)

        const user = new User({ name, email, password: hashedPassword });
        const result = await user.save();
        res.send(result)
    } catch (err) {
        next(err)
    }
}
