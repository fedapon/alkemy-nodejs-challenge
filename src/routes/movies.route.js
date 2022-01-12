import { Router } from 'express'
import {
    getAllMovies,
    getMovie,
    createMovie,
    editMovie,
    deleteMovie,
} from '../controllers/movies.controller.js'

const router = Router()

router.get('/', getAllMovies)

router.get('/:id', getMovie)

router.post('/', createMovie)

router.patch('/:id', editMovie)

router.delete('/:id', deleteMovie)

export default router
