import { Router } from 'express'
import {
    createMovie,
    deleteMovie,
    editMovie,
    getMovie
} from '../controllers/movies.controller.js'

const router = Router()

router.get('/', getMovie)

router.post('/', createMovie)

router.patch('/', editMovie)

router.delete('/', deleteMovie)

export default router
