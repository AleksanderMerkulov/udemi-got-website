export default class dotService{
    constructor() {
        this._apiUrl = "https://anapioficeandfire.com/api"

        this.getAllCharacters = this.getAllCharacters.bind(this)
        this.getCurrCharacters = this.getCurrCharacters.bind(this)

        this.getAllBooks = this.getAllBooks.bind(this)
        this.getCurrBook = this.getCurrBook.bind(this)

        this.getAllHouses = this.getAllHouses.bind(this)
        this.getCurrHouses = this.getCurrHouses.bind(this)
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
    async getAllCharacters(){
        const characters = await this.get(`/characters?page=3`)
        return characters.map(char=>this._transformChar(char))
    }

    /**
     * Получить конкретную книгу по ID
     * @param id ID книги
     * @returns {Promise<*>}
     */
    async getCurrBook(id){
        const book = await this.get(`/books/${id}`)
        return this._transformBook(book)
    }

    /**
     * Получить все книги
     * @returns {Promise<*>}
     */
    async getAllBooks(){
        const books = await this.get(`/books`)
        return books.map(book=>this._transformBook(book))
    }

    /**
     * Получить конкретный дом по ID
     * @param id ID книги
     * @returns {Promise<*>}
     */
    async getCurrHouses(id){
        const book = await this.get(`/houses/${id}`)
        return this._transformHouses(book)
    }

    /**
     * Получить все дома
     * @returns {Promise<*>}
     */
    async getAllHouses(){
        const books = await this.get(`/houses`)
        return books.map(book=>this._transformHouses(book))
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

    _transformBook(book){
        return{
            name: book.name,
            url: book.url,
            isbn: book.isbn,
            authors: book.authors,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            country: book.country,
            mediaType: book.mediaType,
            released: book.released,
            characters: book.characters,
            povCharacters: book.povCharacters,
        }
    }

    _transformHouses(houses){
        return{
            name: houses.name,
            url: houses.url,
            region: houses.region,
            coatOfArms: houses.coatOfArms,
            words: houses.words,
            titles: houses.titles,
            seats: houses.seats,
            currentLord: houses.currentLord,
            heir: houses.heir,
            overlord: houses.overlord,
            founded: houses.founded,
            founder: houses.founder,
            diedOut: houses.diedOut,
            ancestralWeapons: houses.ancestralWeapons,
            cadetBranches: houses.cadetBranches,
            swornMembers: houses.swornMembers,
        }
    }
}

