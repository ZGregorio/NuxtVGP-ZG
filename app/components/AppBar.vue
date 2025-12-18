<template>
    <header>
        <v-app-bar scroll-behavior="hide">
            <v-toolbar-title><strong>SpaceX API Playground</strong></v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer 
            expand-on-hover
            permanent
            rail
            >
            <v-list nav>
            <v-list-item
                title="Home Page"
                component="NuxtLink"
                to="/"
                prepend-icon="mdi-home"
            />
            
            <v-list-item
                title="SpaceX Launch Details"
                component="NuxtLink"
                to="/spacex-launch"
                prepend-icon="mdi-rocket-launch"
            />

            <v-list-item
                title="SpaceX Rocket Details"
                component="NuxtLink"
                to="/spacex-rocket"
                prepend-icon="mdi-rocket"
            />
            </v-list>
        </v-navigation-drawer>
    </header>
</template>
<script lang="ts">

</script>