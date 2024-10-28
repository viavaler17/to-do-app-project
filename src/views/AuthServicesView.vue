<template>
    <div>
      <h2>User Authentication</h2>
      
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" placeholder="Enter your email" />
      </div>
  
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" placeholder="Enter your password" />
      </div>
  
      <div>
        <button @click="handleSignUp">Sign Up</button>
        <button @click="handleLogIn">Log In</button>
        <button @click="handleLogOut">Log Out</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { signUp, logIn, logOut } from '/Users/karolina/Documents/Ironhack/Final_project/to-do-app-project/src/services/authServices.js';

  const email = ref('');
  const password = ref('');
  
  const handleSignUp = async () => {
    await signUp(email.value, password.value);
  };
  
  const handleLogIn = async () => {
    await logIn(email.value, password.value);
  };
  
  const handleLogOut = async () => {
    await logOut();
  };
  </script>
  
  <style scoped>
  </style>