import express from 'express'
import cors from 'cors'
import db from './config/database.js'
import databaseConfiguration from './config/database.config.js'
import charactersRoute from './routes/characters.route.js'
import moviesRoute from './routes/movies.route.js'

const app = express()

databaseConfiguration(db)

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/characters', charactersRoute)

app.use('/movies', moviesRoute)

app.listen(3000, function () {
    console.log('Server started on port 3000')
})
