import { create } from 'zustand';
import axios from 'axios';

const store = (set) => ({
  isLoggedIn: false,
  auth: {
    email: '',
    fullName: '',
    accessToken: '',
    refreshToken: '',
  },
  recipes: [],
  setAuth: (newAuth) =>
    set((state) => ({
      auth: { ...state.auth, ...newAuth},
      isLoggedIn: true
    })),

  setIsLoggedIn: (val) =>
    set((state) => ({
        isLoggedIn: val
    })),
    
  fetchRecipes: (recipes) => set((state) => ({
      recipes: recipes
    })),
});

export const useStore = create(store);