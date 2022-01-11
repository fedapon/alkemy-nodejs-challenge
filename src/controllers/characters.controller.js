import charactersService from '../services/characters.service.js'

const db = new charactersService()

export async function getCharacter(req, res) {
    res.json(await db.getCharacterById(req.params.id))
}

export async function createCharacter(req, res) {
    res.json(await db.createCharacter(req.body))
}

export async function editCharacter(req, res) {
    res.json(await db.editCharacterById(req.params.id, req.body))
}

export async function deleteCharacter(req, res) {
    res.json(await db.deleteCharacterById(req.params.id))
}