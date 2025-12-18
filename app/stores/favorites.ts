import { defineStore } from 'pinia';

interface Rocket {
    rocket: {
        rocket_name: string
    }
    
}

interface FavoritesState {
    favorites: Rocket[]
}

export const useFavoritesStore = defineStore('favorites', {
  state: (): FavoritesState => ({
    favorites: []  
  }),

  actions: {
    addFavorite(rocket: Rocket) {
        if (this.favorites.includes(rocket) === false) 
            return this.favorites.push(rocket)
    },
    removeFavorite(rocket_name: string) {
        this.favorites = this.favorites.filter(r => r.rocket.rocket_name !== rocket_name)
    },
    clearFavorites() {
        this.favorites = []
    }
  }
})