import { DataTypes } from 'sequelize'
import db from '../config/database.js'

const Genre = db.define(
    'Genre',
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

export default Genre
