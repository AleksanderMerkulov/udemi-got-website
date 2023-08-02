export default class dotClass{
    constructor() {
        this._apiUrl = "https://anapioficeandfire.com/api"
    }

    async get(api){
        const res = await fetch(`${this._apiUrl}${api}`)

        if(!res.ok){
            throw new Error(`Could not fetch ${api}, status: ${res.status}`)
        }

        return await res.json()
    }

    getAllCharacters(id){

        const character = this.get(`/characters/${id}`)
        console.log(character)
    }
}

