<template>
    <v-container>
        <v-row>
            <v-col
                v-for="card in cards"
                v-bind:key="card.id"
                cols="2"
            >
                <v-card>
                    <Card
                        :card="card"
                    ></Card>

                </v-card>
            </v-col>
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
            CardService.loadJSON();
            this.cards = CardService.getJSON();
        }
    }
</script>

<style scoped>

</style>