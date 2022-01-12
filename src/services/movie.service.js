import Character from '../models/character.model.js'
import Movie from '../models/movie.model.js'

class moviesService {
    async getAllMovies(query) {
        return await Movie.findAll({
            where: query,
            attributes: ['id', 'picture', 'title', 'createdAt']
        })
    }

    async getMovieById(id) {
        return await Movie.findByPk(id, {include: Character})
    }

    async createMovie(object) {
        const newMovie = Movie.build(object)
        return await newMovie.save()
    }

    async editMovieById(id, object) {
        const editedMovie = await Movie.findByPk(id)
        editedMovie.set(object)
        return await editedMovie.save()
    }

    async deleteMovieById(id) {
        try {
            const deletedMovie = await Movie.findByPk(id)
            await deletedMovie.destroy()
            return true
        } catch {
            return false
        }
    }
}

export default moviesService
