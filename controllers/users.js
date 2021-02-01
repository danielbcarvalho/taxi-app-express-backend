const User = require('../model/User')
const bcrypt = require('bcrypt')

exports.getUser = (req, res) => {
    res.send('bacana')
}

exports.loginUser = async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email: email })

    if (user) {
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if (isPasswordCorrect) {
            return res.send(`Welcome ${user.name}.`)
        }
        return res.send(`Password does not match email ${email}`)
    }
    return res.send(`The email ${email} does not exist`)
}

exports.createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body

        const hashedPassword = await bcrypt.hash(password, 12)

        const checkEmail = await User.findOne({ email: email })

        if (checkEmail) {
            return res
                .status(409)
                .send(`An account withe the email ${email} already exists`)
        }

        const user = new User({ name, email, password: hashedPassword });
        const result = await user.save();
        res.send(result)
    } catch (err) {
        res.status(500).send(err)
    }
}
