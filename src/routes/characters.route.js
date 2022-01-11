import { Router } from 'express'
import {
    getCharacter,
    createCharacter,
    editCharacter,
    deleteCharacter
} from '../controllers/characters.controller.js'

const router = Router()

router.get('/:id', getCharacter)

router.post('/', createCharacter)

router.patch('/:id', editCharacter)

router.delete('/:id', deleteCharacter)

export default router
