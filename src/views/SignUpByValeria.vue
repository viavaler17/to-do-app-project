<template>
    <div>
      <h1>Sign Up</h1>
      <form @submit.prevent="handleSignup">
        <input v-model="username" placeholder="Username" required />
        <input v-model="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { signup } from '@/services/database';
  import { useRouter } from 'vue-router';
  
  const username = ref('');
  const email = ref('');
  const password = ref('');
  const router = useRouter();
  
  const handleSignup = async () => {
    try {
      const { user, data } = await signup(username.value, email.value, password.value);
      console.log('User signed up:', user, data);
      router.push({ name: 'Profile' });
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };
  </script>

  <style scoped></style>