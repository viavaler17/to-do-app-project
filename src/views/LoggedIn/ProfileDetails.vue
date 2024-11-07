<script setup>
import ProfileBlueBar from '@/components/ProfileBlueBar.vue';
import LogOutByValeria from '../LogOutByValeria.vue';

</script>

<template>
  <ProfileBlueBar profileHeader="Your Details"></ProfileBlueBar>
    <div class="profile-container">
      <h2>User Profile</h2>
      <br>
      <div class="profile-picture">
        <img src="https://img.freepik.com/free-vector/smiling-girl-portrait-casual-clothing-cartoon-flat-style-isolated-white-happy-teenager-vector_90220-2635.jpg?t=st=1730465250~exp=1730468850~hmac=f4eb3a800d384c749d9564dd842c97e2ebce5575ec165b9af0a51c2b37b786b1&w=740" alt="Profile Picture" />
      </div>
  
     
      <div class="profile-info">
        <label>Email:</label>
        <p>user@example.com</p>
      </div>
  
      
      <div class="profile-info">
        <label>Password:</label>
        <p>********</p>
      </div>
    </div><br>
    <LogOutByValeria></LogOutByValeria>
  </template>
  
  <style scoped>
  /* Profile Container */
  .profile-container {
      max-width: 400px;
      margin: 20px auto 70px auto;
      padding: 20px;
      border-radius: 8px;
      background: #ffffff;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
      text-align: center;
  }
  

  .profile-picture {
      margin-bottom: 20px;
  }
  
  .profile-picture img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid #FFEB3B;
  }
  
  .profile-info {
      margin-bottom: 15px;
      text-align: left;
  }
  
  .profile-info label {
      display: block;
      font-size: 0.9rem;
      color: #333;
      font-weight: bold;
      margin-bottom: 5px;
  }
  
  .profile-info p {
      font-size: 1rem;
      color: #666;
      margin: 0;
  }
  </style>