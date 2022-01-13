import { Router } from 'express'
import { authMiddleware } from '../middlewares/auth.middleware.js'
import {
    getAllMovies,
    getMovie,
    createMovie,
    editMovie,
    deleteMovie
} from '../controllers/movies.controller.js'

const router = Router()

router.get('/', authMiddleware, getAllMovies)

router.get('/:id', authMiddleware, getMovie)

router.post('/', authMiddleware, createMovie)

router.patch('/:id', authMiddleware, editMovie)

router.delete('/:id', authMiddleware, deleteMovie)

export default router
