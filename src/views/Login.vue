<template>
  <div>
    <input v-model="email" placeholder="Email">
    <input v-model="password" type="password" placeholder="Mot de passe">
    <button @click="login">Se connecter</button>
  </div>
</template>

<script>
import authService from '../services/authService';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await authService.login(this.email, this.password);
        localStorage.setItem('token', response.data.token); // Sauvegarde le token
        console.log('Connexion réussie:', response.data);
      } catch (error) {
        console.error('Erreur de connexion:', error);
      }
    }
  }
};
</script>
