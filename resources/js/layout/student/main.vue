<template>
    <div>
        <v-app-bar
        app
        flat
        elevation="2">
            <div class="text-center mx-auto">
                <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    elevation="0"
                    large rounded
                    v-bind="attrs"
                    v-on="on"
                    class="mx-auto">
                        <v-avatar
                        color="grey"
                        size="32">
                        <v-icon>mdi-account</v-icon>
                        </v-avatar>
                        <span class="ml-2">My Name</span>
                        <v-icon>mdi-chevron-down</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-account</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>Account</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item @click="$emit('logout')">
                        <v-list-item-icon>
                            <v-icon>mdi-logout-variant</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>Logout</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                </v-menu>
            </div>
        </v-app-bar>
    </div>
</template>