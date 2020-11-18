import cardJson from "../assets/cards.json"
import axios from "axios"

export default {
    cards: [],
    json: [],
    fetching: false,
    loadJSON () {
        this.json = cardJson
    },
    getJSON(){
        return this.json
    },
    getCards () {
        return this.cards
    },
    addCard (card) {
        this.cards.push(card)
    },
    async loadCardData (card) {
        let name = card.name
        let cardUri = encodeURIComponent(name)
        let url = "https://api.scryfall.com/cards/named?fuzzy=" + cardUri

        let fetched = await axios.get(url)
        console.info("fetched card",fetched)
        return fetched
    }
}