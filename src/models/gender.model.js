import { DataTypes } from 'sequelize'
import db from '../config/database.js'

const Gender = db.define(
    'Gender',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        picture: {
            type: DataTypes.STRING
        }
    },
    {
        // Other model options go here
    }
)

export default Gender
