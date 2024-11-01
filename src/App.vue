<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import NavbarComponent from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';


</script>


<template>
        <HeaderComponent></HeaderComponent>
        <NavbarComponent/>
        <div id="app">
    <FooterComponent />
  </div>
</template>


<style scoped>
*{
    background-color: white;
    color: green;

}

#app {
    display: flex;
    flex-direction: column;
    min-height: 100vh; 
}
</style>
