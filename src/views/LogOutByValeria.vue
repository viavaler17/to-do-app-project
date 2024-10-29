<template>
    <div>
      <h1>Logout</h1>
      <button @click="handleLogout">Logout</button>
      <p v-if="message">{{ message }}</p>
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
      router.push('/profile');
    } catch (error) {
      message.value = 'Error logging out: ' + error.message; 
      console.error('Error logging out:', error);
    }
  };
  </script>
  
  <style scoped>
  </style>