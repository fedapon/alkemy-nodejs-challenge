import charactersService from "../services/characters.service.js"

const db = new charactersService()

export async function getCharacter (req, res) {
    res.json({message: await db.getCharacterById(req.query.id)})
}

export async function createCharacter (req, res) {
    res.json({message: await db.createCharacter(req.query.id)})   
}

export async function editCharacter (req, res) {
    res.json({message: await db.editCharacter(req.query.id)})   
}

export async function deleteCharacter (req, res) {
    res.json({message: await db.deleteCharacter(req.query.id)})   
}