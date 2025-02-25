<template>
    <div>
      <h2>Inscription</h2>
      <form @submit.prevent="register">
        <input v-model="nom" type="text" placeholder="Nom" required />
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Mot de passe" required />
        <input v-model="confirmPassword" type="password" placeholder="Confirmer le mot de passe" required />
        <button type="submit">S'inscrire</button>
      </form>
      <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  import { mapActions } from "vuex";
  
  export default {
    data() {
      return {
        nom: "",
        email: "",
        password: "",
        confirmPassword: "",
        errorMessage: null,
      };
    },
    methods: {
      ...mapActions("auth", ["register"]), // 🔥 Utilisation de l'action Vuex pour s'inscrire
      async register() {
        if (this.password !== this.confirmPassword) {
          this.errorMessage = "Les mots de passe ne correspondent pas ❌";
          return;
        }
  
        try {
          await this.register({
            nom: this.nom,
            email: this.email,
            password: this.password,
          });
          this.$router.push("/profile"); //  Rediriger vers le profil après inscription
        } catch (error) {
          this.errorMessage = "Erreur d'inscription ❌";
        }
      },
    },
  };
  </script>
  