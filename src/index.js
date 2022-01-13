import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import db from './config/database.js'
import databaseConfiguration from './config/database.config.js'
import authRoute from './routes/auth.route.js'
import charactersRoute from './routes/characters.route.js'
import moviesRoute from './routes/movies.route.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT | 3000

databaseConfiguration(db, { mockdata: process.env.MOCKDATA })

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/auth', authRoute)

app.use('/characters', charactersRoute)

app.use('/movies', moviesRoute)

app.listen(PORT, function () {
    console.log(`Server started on port ${PORT}`)
})
