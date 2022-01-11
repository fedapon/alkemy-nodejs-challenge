import express from 'express'
import cors from 'cors'
import db from './config/database.js'
import Character from './models/character.model.js'
import Movie from './models/movie.model.js'
import charactersRoute from './routes/characters.route.js'
import moviesRoute from './routes/movies.route.js'

const app = express()

Character.belongsToMany(Movie, {through: 'CharactersMovies'})
Movie.belongsToMany(Character, {through: 'CharactersMovies'})

db.authenticate()
    .then(async ()=>{
        await db.sync({ alter: true })
        console.log('Database connected...')
    })
    .catch(error=>console.log('Database connection error: ' + error))

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/characters', charactersRoute)

app.use('/movies', moviesRoute)

app.listen(3000, function () {
    console.log('Server started on port 3000')
})
