import { DataTypes } from 'sequelize'
import db from '../config/database.js'
import bcrypt from 'bcrypt'

const User = db.define(
    'User',
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    msg: 'The username must be a valid email'
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        // Other model options go here
        hooks: {
            beforeCreate: async function (user) {
                user.password = await bcrypt.hash(user.password, 10)
            }
        }
    }
)

User.prototype.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

export default User
