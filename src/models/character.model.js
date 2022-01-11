import { DataTypes } from 'sequelize'
import db from '../config/database.js'

const Character = db.define(
    'Character',
    {
        picture: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER
        },
        weigth: {
            type: DataTypes.FLOAT
        },
        history: {
            type: DataTypes.STRING
        }
    },
    {
        // Other model options go here
    }
)

export default Character
