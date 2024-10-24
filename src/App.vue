<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue';
import Navbar from './components/Navbar.vue';
import SearchComponent from './components/SearchComponent.vue';
import CategoriesTags from './components/CategoriesTags.vue';
import TrueHeader from './components/TrueHeader.vue';
import ProfileDetails from './views/LoggedIn/ProfileDetails.vue';

</script>


<template>
        <TrueHeader></TrueHeader>
        <Navbar/>
</template>


<style scoped>
*{
    background-color: white;
    color: green;

}
</style>
