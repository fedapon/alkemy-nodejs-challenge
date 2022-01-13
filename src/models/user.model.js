import { DataTypes } from 'sequelize'
import db from '../config/database.js'

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
    }
)

export default User
