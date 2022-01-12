import { DataTypes } from 'sequelize'
import Character from '../models/character.model.js'
import Movie from '../models/movie.model.js'
import Gender from '../models/gender.model.js'

async function databaseConfiguration(db) {
    try {
        await db.authenticate()
        const CharactersMovies = db.define('CharactersMovies', {
            id: {
              type: DataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true,
              allowNull: false
            }
          }, { timestamps: false });
        Character.belongsToMany(Movie, { through: 'CharactersMovies' })
        Movie.belongsToMany(Character, { through: 'CharactersMovies' })
        Gender.hasMany(Movie)
        Movie.belongsTo(Gender)
        //await db.sync({ alter: true })
        console.log('Database connected...')
    }
    catch (error) {
        console.log('Database connection error: ' + error)
    }
}

export default databaseConfiguration
