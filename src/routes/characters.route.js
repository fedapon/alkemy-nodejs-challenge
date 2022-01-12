import { Router } from 'express'
import {
    getAllCharacters,
    getCharacter,
    createCharacter,
    editCharacter,
    deleteCharacter
} from '../controllers/characters.controller.js'

const router = Router()

router.get('/', getAllCharacters)

router.get('/:id', getCharacter)

router.post('/', createCharacter)

router.patch('/:id', editCharacter)

router.delete('/:id', deleteCharacter)

export default router
