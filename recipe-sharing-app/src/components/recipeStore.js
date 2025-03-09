import {create}  from 'zustand'

export const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  setRecipies:(updateRecipe)=>set({recipies}),
  setRecipies:(deleteRecipe)=>set([])
}));

