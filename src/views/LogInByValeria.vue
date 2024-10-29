<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
        <input v-model="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { login } from '@/services/database';
  import { useRouter } from 'vue-router';
  
  const email = ref('');
  const password = ref('');
  const errorMessage = ref('');
  const router = useRouter();
  
  const handleLogin = async () => {
    errorMessage.value = '';
    try {
      const user = await login(email.value, password.value);
      console.log('User logged in:', user);
      router.push('/profile');

    } catch (error) {
      errorMessage.value = error.message;
      console.error('Error logging in:', error);
    }
  };
  </script>

  <style scoped>
</style>