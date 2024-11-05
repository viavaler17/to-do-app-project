<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import NavbarComponent from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';


</script>


<template>
        <HeaderComponent></HeaderComponent>
        <NavbarComponent/>
        <div id="footer-design">
    <FooterComponent />
  </div>
</template>


<style scoped>
*{
    background-color: white;
    color: green;

}

#footer-design {
    display: flex;
    flex-direction: column;
    
}
#footer-design[data-v-7a7a37b1] {
   position: relative;
    width: 100%;
    height: unset;
    bottom: 0; 
}
</style>

