<template>
    <v-container>
        <v-card
            :id="card.id"
            @mouseenter="hover = true"
            @mouseleave ="hover = false"
        >
            <v-card-title>{{ card.name }}</v-card-title>
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
    </v-container>
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
                    this.loadData();
                }
            }
        },
        methods: {
            loadData () {
                if(this.cardData !== null){
                    return;
                }
                this.loading = true;
                CardService.loadCardData(this.card.name).then((data) => {
                    this.cardData = data;
                    this.loading = false;
                });
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