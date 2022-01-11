import { Router } from 'express'
import {
    getCharacter,
    createCharacter,
    editCharacter,
    deleteCharacter
} from '../controllers/characters.controller.js'

const router = Router()

router.get('/', getCharacter)

router.post('/', createCharacter)

router.patch('/', editCharacter)

router.delete('/', deleteCharacter)

export default router
