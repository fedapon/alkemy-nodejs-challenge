import express from "express";
import charactersRoute from './routes/characters.route.js'
import moviesRoute from './routes/movies.route.js'

const app = express()

app.get('/', (req, res)=> {
    res.send('Hello')
})

app.use('/characters', charactersRoute)

app.use('/movies', moviesRoute)

app.listen(3000, function() {
    console.log('Server started on port 3000')
})