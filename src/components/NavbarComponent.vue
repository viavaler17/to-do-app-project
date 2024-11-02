<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <nav>
    <ul>
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/browserecipes">Browse Recipes</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/profile">Personal Account</router-link></li>
    </ul>
  </nav>
  <router-view></router-view>
</template>

<style scoped>
  ul{
        list-style-type: none;
        display: flex;
        justify-content: end;
        gap: 20px;
        width: 100%;
        padding: 20px 40px;
        background-color: #00686B;
        color: white;
        font-size: 18px;
        font-weight: 600;
  }

  a:link{
    color: white;
  }

  a:visited{
    color: white;
  }
</style>