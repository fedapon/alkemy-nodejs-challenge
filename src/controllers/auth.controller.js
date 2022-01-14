import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'
import mailService from '../services/mail.service.js'

export async function authLogin(req, res) {
    const { username, password } = req.body
    try {
        const userToValidate = await User.findOne({
            where: {
                username: username
            }
        })
        if (!userToValidate) {
            return res.status(404).json({ error: 'username has not be found' })
        }
        if (await userToValidate.comparePassword(password)) {
            const token = await generateToken({
                id: userToValidate.id,
                username: userToValidate.username
            })
            return res.json({ token })
        } else {
            return res.status(401).json({ error: 'password is not correct' })
        }
    } catch (error) {
        return res.status(500).json({ error: error })
    }
}

export async function authRegister(req, res) {
    if (!req.body.username | !req.body.password) {
        return res
            .status(400)
            .json({ error: 'username and password are mandatory' })
    }
    try {
        let user = {}
        try {
            user = await User.create({
                username: req.body.username,
                password: req.body.password
            })
        } catch (error) {
            return res.json({ error: error.errors[0].message })
        }

        let mail = new mailService(
            user.username,
            'Welcome',
            `Welcome ${user.username} to Alkemy API challenge`,
            `<h2>Welcome ${user.username} to Alkemy API challenge</h2>`
        )
        mail.sendMail().catch()

        const token = await generateToken({
            id: user.id,
            username: user.username
        })
        return res.status(201).json({ token })
    } catch (error) {
        return res.status(500).json({ error: error })
    }
}

async function generateToken(object) {
    return new Promise(function (resolve, reject) {
        jwt.sign(
            object,
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN },
            (error, token) => {
                if (error) {
                    reject(error)
                }
                resolve(token)
            }
        )
    })
}
