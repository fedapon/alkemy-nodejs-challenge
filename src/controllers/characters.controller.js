import charactersService from '../services/characters.service.js'

const db = new charactersService()

export async function getAllCharacters(req, res) {
    return res.json(await db.getAllCharacters(req.query))
}

export async function getCharacter(req, res) {
    return res.json(await db.getCharacterById(req.params.id))
}

export async function createCharacter(req, res) {
    const { picture, name, age, weigth, history } = req.body
    return res.json(
        await db.createCharacter({ picture, name, age, weigth, history })
    )
}

export async function editCharacter(req, res) {
    const { picture, name, age, weigth, history } = req.body
    return res.json(
        await db.editCharacterById(req.params.id, {
            picture,
            name,
            age,
            weigth,
            history
        })
    )
}

export async function deleteCharacter(req, res) {
    if (await db.deleteCharacterById(req.params.id)) {
        return res.json({ message: 'character deleted' })
    } else {
        return res.json({ message: 'character could not be deleted' })
    }
}
