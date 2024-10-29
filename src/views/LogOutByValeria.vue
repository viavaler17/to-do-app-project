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
  
  const message = ref(''); // To display logout success or error messages
  
  const handleLogout = async () => {
    message.value = ''; // Reset message
    try {
      await logout(); // Call the logout function
      message.value = 'You have been logged out successfully.';
      
      // Optionally, redirect the user or perform any other action
    } catch (error) {
      message.value = 'Error logging out: ' + error.message; // Set error message to display
      console.error('Error logging out:', error);
    }
  };
  </script>
  
  <style scoped>
  </style>