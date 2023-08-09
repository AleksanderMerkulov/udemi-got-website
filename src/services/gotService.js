export default class dotService{
    constructor() {
        this._apiUrl = "https://anapioficeandfire.com/api"
    }

    /**
     * GET-запрос для класса
     * @param url адрес запроса API
     * @returns {Promise<any>}
     */
    async get(url){
        const res = await fetch(`${this._apiUrl}${url}`)

        if(!res.ok){
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }

        return await res.json()
    }

    /**
     * Получить конкретного персонажа по ID
     * @param id ID персонажа
     * @returns {Promise<*>}
     */
    async getCurrCharacters(id){
        const character = await this.get(`/characters/${id}`)
        return this._transformChar(character)
    }

    /**
     * Получить всех персонажей
     * @returns {Promise<*>}
     */
    getAllCharacters(){
        return this.get(`/characters`)
    }

    /**
     * Получить конкретную книгу по ID
     * @param id ID книги
     * @returns {Promise<*>}
     */
    getCurrBook(id){
        return this.get(`/books/${id}`)
    }

    /**
     * Получить все книги
     * @returns {Promise<*>}
     */
    getAllBooks(){
        return this.get(`/books`)
    }

    _transformChar(char){
        return{
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }
}

