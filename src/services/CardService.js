import cardJson from "../assets/cards.json";
import axios from "axios";

export default {
    cards: [],
    fetching: false,
    loadCards () {
        this.cards = cardJson;
    },
    getCards () {
        return this.cards;
    },
    loadCardData (name) {
        return new Promise((resolve) => {
            if(this.fetching){
                resolve(null);
            }

            this.fetching = true;
    
            let cardUri = encodeURIComponent(name);
            let url = "https://api.scryfall.com/cards/named?fuzzy=" + cardUri;
    
            axios.get(url).then((response) => {
                resolve(response.data);
            }).finally(()=>{
                this.fetching = false;
            }) 

        })
    }
}