<template>
    <v-app id="app">
        <v-app-bar
            app
            flat
        >
            <v-toolbar-title>edh.rocks</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn
                v-for="link in links"
                :key="link"
                :to="link.url"
                text
            >
                {{ link.label }}
            </v-btn>
        </v-app-bar>

        <v-main>
            <v-container>
                <v-row>

                    <v-col>
                        <router-view></router-view>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        links: [
            {
                label: "Banlist",
                url: "/"
            },
            // {
            //     label: "About",
            //     url: "/about"
            // },
            // {
            //     label: "Contact",
            //     url: "/contact"
            // },
            {
                label: "Imprint & Privacy",
                url: "/imprint_privacy"
            }
        ],
    }),
}
</script>