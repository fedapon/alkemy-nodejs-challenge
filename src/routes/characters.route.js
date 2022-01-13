import { Router } from 'express'
import { authMiddleware } from '../middlewares/auth.middleware.js'
import {
    getAllCharacters,
    getCharacter,
    createCharacter,
    editCharacter,
    deleteCharacter
} from '../controllers/characters.controller.js'

const router = Router()

router.get('/', authMiddleware, getAllCharacters)

router.get('/:id', authMiddleware, getCharacter)

router.post('/', authMiddleware, createCharacter)

router.patch('/:id', authMiddleware, editCharacter)

router.delete('/:id', authMiddleware, deleteCharacter)

export default router
