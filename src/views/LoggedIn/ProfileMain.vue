<script setup>
import ProfileDetails from './ProfileDetails.vue';

</script>

<template>
    <div class="profile-hello">
        <h1>Hello</h1>
        <p>Select from the options below</p>
    </div>

    <ul>
        <li><router-link to="/addrecipe">Add a recipe</router-link></li>
        <li><router-link to="/profiledetails">Your details</router-link></li>
    </ul>
</template>

<style scoped>
</style>