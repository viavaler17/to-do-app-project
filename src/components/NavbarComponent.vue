<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <nav>
    <ul>
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/browserecipes">Browse Recipes</router-link></li>
      <li><router-link to="/about">About</router-link></li>
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

  li a{
  margin: 6px;
  transition: background-color 0.2s ease;
  padding: 5px;
}

  li a:hover{
    padding: 5px;
    background-color: #004f4f;
    border-radius: 5px;
  }

  a:link{
    color: white;
  }

  a:visited{
    color: white;
  }
</style>