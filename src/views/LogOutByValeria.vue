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
  background-color: #dc3545;
  padding: 10px 40px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  color: white;
  border: none;
  }

  button:hover{
    background-color: #c82333;
  }

  h1{
    text-align: center;
  }
  </style>