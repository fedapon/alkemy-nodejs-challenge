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
            type: DataTypes.INTEGER,
            validate: {
                min: 1,
                max: 5
            }
        }
    },
    {
        // Other model options go here
    }
)

export default Movie
