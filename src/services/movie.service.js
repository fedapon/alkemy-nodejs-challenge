import Character from '../models/character.model.js'
import Movie from '../models/movie.model.js'

class moviesService {
    async getAllMovies(query) {
        const { title, genre, order } = query
        let queryToFind = {}
        let titleOrder = []
        if (title) {
            queryToFind.title = title
        }
        if (genre) {
            queryToFind.genre = genre
        }
        if (order) {
            if (query.order === 'ASC') {
                titleOrder.push(['createdAt', 'ASC'])
            } else {
                titleOrder.push(['createdAt', 'DESC'])
            }
        }
        return await Movie.findAll({
            where: queryToFind,
            order: titleOrder,
            attributes: ['id', 'picture', 'title', 'createdAt']
        })
    }

    async getMovieById(id) {
        return await Movie.findByPk(id, {
            include: {
                model: Character,
                as: 'characters',
                through: {
                    attributes: []
                }
            }
        })
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
