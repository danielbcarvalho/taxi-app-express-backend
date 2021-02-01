const User = require('../model/User')
const bcrypt = require('bcrypt')

exports.getUser = async (req, res) => {
    const usersFromDb = await User.find({})
    const users = usersFromDb.map(({ email, name }) => ({
        email,
        name,
    })
    )
    res.json(users)
}

