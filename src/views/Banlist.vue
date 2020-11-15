<template>
    <v-container>
        <v-row
            v-for="card in cards"
            v-bind:key="card.id"
        >
            <Card
                :card="card"
            ></Card>
        </v-row>
    </v-container>
</template>

<script>
    import CardService from "../services/CardService";
    import Card from "../components/Card";

    export default {    
        name: "Banlist",
        components: {
            Card
        },
        data: function () {
            return {
                cards: []
            }
        },
        mounted: function () {
            CardService.loadCards();
            this.cards = CardService.getCards();
        }
    }
</script>

<style scoped>

</style>