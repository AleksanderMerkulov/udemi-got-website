export default class dotClass{
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
    getCurrCharacters(id){
        return this.get(`/characters/${id}`)
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
}

