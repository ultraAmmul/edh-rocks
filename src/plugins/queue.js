import CardService from "../services/CardService";

export default {
    queue: [],
    delay: 500,
    cards: [{name: "Sol Ring"}, {name: "Mana Vault"}],
    init: function(){
        for(let card of this.cards){
            let queueItem = {
                callback: CardService.loadCardData,
                card: card,
                context: this
            }
            this.queue.push(queueItem)
        }
        this.work(this.queue)
    },
    work: (queue) => {
        if(queue.length < 1){
            return
        }
        let queueItem = queue.shift()
        setTimeout(() => {queueItem.context.work(queueItem.context.queue)}, queueItem.context.delay)
        queueItem.callback(queueItem.card).then((card)=>CardService.addCard(card))
    },
} 