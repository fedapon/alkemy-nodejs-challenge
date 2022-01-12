import moviesService from '../services/movie.service.js'

const db = new moviesService()

export async function getAllMovies(req, res) {
    res.json(await db.getAllMovies(req.query))
}

export async function getMovie(req, res) {
    res.json(await db.getMovieById(req.params.id))
}

export async function createMovie(req, res) {
    res.json(await db.createMovie(req.body))
}

export async function editMovie(req, res) {
    res.json(await db.editMovieById(req.params.id, req.body))
}

export async function deleteMovie(req, res) {
    res.json(await db.deleteMovieById(req.params.id))
}
