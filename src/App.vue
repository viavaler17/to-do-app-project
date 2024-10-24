<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue';
import Navbar from './components/Navbar.vue';
import SearchComponent from './components/SearchComponent.vue';
import CategoriesTags from './components/CategoriesTags.vue';

</script>


<template>
        <Navbar/>
        <AppHeader></AppHeader>
        
</template>


<style scoped>
*{
    background-color: white;
    color: green;

}
</style>
