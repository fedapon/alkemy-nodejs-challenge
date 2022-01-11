import { DataTypes } from 'sequelize'
import db from '../config/database.js'

const Movie = db.define(
    'Movie',
    {
        picture: {
            type: DataTypes.STRING
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        calification: {
            type: DataTypes.INTEGER
        }
    },
    {
        // Other model options go here
    }
)

export default Movie
