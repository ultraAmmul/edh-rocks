<template>
    <v-container>            
        <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
            <span
                @mouseenter="hover = true"
                @mouseleave ="hover = false"
                v-bind="attrs"
                v-on="on"            
            >
                {{ card.name }}
            </span>
                </template>
                <div class="card">
                    <v-progress-circular
                        indeterminate
                        v-if="loading"
                    ></v-progress-circular>
                    <v-img 
                        v-if="cardData !== null"
                        :src="cardData.image_uris.normal"
                        contain
                    ></v-img>
                </div>
            </v-tooltip>
    </v-container>
    <!-- <v-container>
        <v-card
            :id="card.id"
        >
            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                </template>
                    <div class="card">
                        <v-progress-circular
                            indeterminate
                            v-if="loading"
                        ></v-progress-circular>
                        <v-img 
                            v-if="cardData !== null"
                            :src="cardData.image_uris.normal"
                            contain
                        ></v-img>
                    </div>
            </v-tooltip>
            <v-card-text>
                <v-row>
                    <v-col>
                        <div class="card text-center">
                            <v-progress-circular
                                indeterminate
                                v-if="loading"
                            ></v-progress-circular>
                            <div
                                class="hint"
                                v-if="!loading && cardData === null"
                            >
                                <span>Hover to load image</span>
                            </div>
                            <v-img 
                                v-if="cardData !== null"
                                :src="cardData.image_uris.normal"
                                contain
                            ></v-img>
                        </div>
                    </v-col>
                    <v-col>
                        <v-sheet
                            class="pa-5"
                        >
                            {{ card.description }}
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-container> -->
</template>

<script>
import CardService from '../services/CardService'

    export default {
        name: 'Card',
        data: function () {
            return {
                cardData: null,
                hover: false,
                loading: false   
            }
        },
        props: ["card"],
        watch: {
            hover: function(){
                if(!this.loading){
                    this.loadData()
                }
            }
        },
        methods: {
            async loadData () {
                if(this.cardData !== null){
                    return;
                }
                this.loading = true
                let fetchedCard = await CardService.loadCardData(this.card)
                this.cardData = fetchedCard.data
                console.log(this.cardData)
                this.loading = false


            }
        },
        mounted: function () {

        }
    }
</script>

<style scoped>

    .card {
        height: 284px; 
        width: 204px;
        position: relative;
        border: 1px solid black;
        border-radius: 11px;
    }

    .hint{
        width: 100%;
        text-align: center;
    }

    .card .v-image{
        border-radius: 11px;
    }

</style>