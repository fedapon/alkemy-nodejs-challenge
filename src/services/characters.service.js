class charactersService {
    async getCharacterById (id) {
        return {id}
    }

    async createCharacter (object) {
        return object
    }

    async editCharacterById (id, object) {
        return object
    }

    async deleteCharacterById (id) {
        return {id}
    }
}

export default charactersService