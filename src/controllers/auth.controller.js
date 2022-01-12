import jwt from 'jsonwebtoken'

export async function authLogin(req, res) {
    return res.json({ messaje: 'login' })
}

export async function authRegister(req, res) {
    try {
        const token = await generateToken({ user: req.body.user })
        return res.json({ token })
    } catch (error) {
        return res.json({ error: error})
    }
}

async function generateToken(object) {
    return new Promise(function (resolve, reject) {
        jwt.sign(object, process.env.SECRET, (error, token) => {
            if (error) {
                reject(error)
            }
            resolve(token)
        })
    })
}