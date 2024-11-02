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
    
}
#app[data-v-7a7a37b1] {
   position: relative;
    width: 100%;
    height: unset;
    bottom: 0; 
}
/* position: absolute;
    width: 100%;
    height: unset;
    bottom: 0; */
</style>
