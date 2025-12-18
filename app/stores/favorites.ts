import { defineStore } from 'pinia';

interface Rocket {
    rocket: {
        id: number
        name: string
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
    removeFavorite(id: number) {
        this.favorites = this.favorites.filter(r => r.rocket.id !== id)
    },
    clearFavorites() {
        this.favorites = []
    }
  }
})