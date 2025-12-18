<template>
	<NuxtPage/>
    <v-container class="text-center">
        <v-table striped="even" >
            <thead>
            <tr>
                <th 
                class="text-center"
                >
                <strong>Favorite Rocket Name/s</strong> 
                </th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="rocket in favoritesStore.favorites"
                class="text-center"
            >
                <td>{{ rocket.rocket.rocket_name }}</td>
            </tr>
            </tbody>
        </v-table>
        <br></br>
        <v-hover v-slot="{ isHovering, props }" >
            <v-btn 
                elevation="2" 
                @click="favoritesStore.clearFavorites()"
                x-small 
                rounded
                prepend-icon="mdi-alpha-x-circle"
                size="large"
                v-bind:="props"
                :style="{ 'background-color': isHovering ? 'red' : 'white' }"
            >
            <strong>Clear Favorites</strong>
            </v-btn>
        </v-hover>
    </v-container>
</template>
<script lang="ts" setup>
    import { useFavoritesStore } from '~/stores/favorites'
    const favoritesStore = useFavoritesStore()
    const toggleFavorite = useFavoritesStore()

    
</script>