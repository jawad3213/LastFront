import { createStore } from 'vuex';

import auth from "./auth"; // Importer le module auth

const store = createStore({
  modules: {
    auth, // Ajouter auth.js comme module Vuex
  },
  state() {
    return {
      user: { name: "Utilisateur", books: [] }
    };
  },
  mutations: {
    addBook(state, book) {
      state.user.books.push(book);
    }
  },
  actions: {
    addBook(context, book) {
      context.commit('addBook', book);
    }
  }
});

export default store;
