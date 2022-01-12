import Character from '../models/character.model.js'
import Movie from '../models/movie.model.js'
import Genre from '../models/genre.model.js'

async function databaseConfiguration(db, options={}) {
    try {
        await db.authenticate()
        Character.belongsToMany(Movie, { through: 'CharactersMovies' })
        Movie.belongsToMany(Character, { through: 'CharactersMovies' })
        Genre.hasMany(Movie)
        Movie.belongsTo(Genre)
        if (options.mockdata == true) {
          mockData(db)
        } else{
            db.sync()
        }
        console.log('Database connected...')
    } catch (error) {
        console.log('Database connection error: ' + error)
    }
}

async function mockData(db) {
    await db.sync({ force: true })
    const char1 = await Character.create({ name: 'Mickey' })
    const char2 = await Character.create({ name: 'Minie' })
    const char3 = await Character.create({ name: 'Donald' })
    const movie1 = await Movie.create({ title: 'Tiburon' })
    const movie2 = await Movie.create({ title: 'Matrix' })
    const movie3 = await Movie.create({ title: 'Back to the future' })
    const genre1 = await Genre.create({ name: 'adventure' })
    const genre2 = await Genre.create({ name: 'thriller' })

    await char1.addMovies([movie1, movie2])
    await char2.addMovies([movie1, movie2, movie3])
    await char3.addMovies([movie3])
    await char1.save()
    await char2.save()
    await char3.save()

    await movie1.setGenre(genre1)
    await movie2.setGenre(genre2)
    await movie3.setGenre(genre1)
    await movie1.save()
    await movie2.save()
    await movie3.save()
}

export default databaseConfiguration
