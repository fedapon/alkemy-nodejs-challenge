import express from 'express'
import cors from 'cors'
import { Sequelize } from 'sequelize'
import charactersRoute from './routes/characters.route.js'
import moviesRoute from './routes/movies.route.js'

const app = express()
export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../persistence/database.sqlite',
    logging: console.log,                  // Default, displays the first parameter of the log function call
})

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
    try {
        await sequelize.authenticate()
        res.send('Connection has been established successfully.')
    } catch (error) {
        res.send('Unable to connect to the database: ' + error)
    }
})

app.use('/characters', charactersRoute)

app.use('/movies', moviesRoute)

app.listen(3000, function () {
    console.log('Server started on port 3000')
})
