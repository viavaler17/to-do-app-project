<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import NavbarComponent from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

</script>


<template>
        <HeaderComponent></HeaderComponent>
        <NavbarComponent/>

        <router-link to="/authservices">
            Auth Services Here
        </router-link>

        <FooterComponent></FooterComponent>
</template>


<style scoped>
*{
    background-color: white;
    color: green;

}
</style>
