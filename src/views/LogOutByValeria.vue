<template>
    <div class="logout-position">
      <h1>Logout</h1><br>
      <button @click="handleLogout">Logout</button><br>
      <p v-if="message">{{ message }}</p><br>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { logout } from '@/services/database';
  import { useRouter } from 'vue-router';

  
  const message = ref('');
  const router = useRouter();
  
  
  const handleLogout = async () => {
    message.value = ''; 
    try {
      await logout(); 
      message.value = 'You have been logged out successfully.';
      router.push('/home');
    } catch (error) {
      message.value = 'Error logging out: ' + error.message; 
      console.error('Error logging out:', error);
    }
  };
  </script>
  
  <style scoped>
  button{
  display: block;
  margin: auto;
  }

  h1{
    text-align: center;
  }
  </style>