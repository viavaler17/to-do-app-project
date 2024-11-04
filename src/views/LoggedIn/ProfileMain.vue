
<script setup>
import Propositions from '@/components/Propositions.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="profile-container">
        <div class="greetings">
            <h1>Hello!</h1>
            <p>Select from the options below:</p>
        </div>
        <ul class="options-list">
            <li><router-link to="/favourited">Favourited recipes</router-link></li>
            <li><router-link to="/addrecipe">Add a Recipe</router-link></li>
            <li><router-link to="/addedrecipes">Manage added recipes</router-link></li>
            <li><router-link to="/profiledetails">Your Details</router-link></li>
        </ul>
    </div>
    <div class="random-recipes">
        <p class="suggestions-title">You might also like:</p>
        <Propositions />
    </div>
</template>

<style scoped>
.profile-container {
    max-width: 600px;
    margin: 70px auto;
    padding: 25px;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.greetings {
    margin-bottom: 25px;
}

.greetings h1 {
    color: #00686B;
    font-size: 2.5rem;
    margin-bottom: 10px;
}

.greetings p {
    font-size: 1.1rem;
    color: #555;
}

.options-list {
    list-style: none;
    padding: 0;
}

.options-list li {
    margin: 20px 0;
}

.options-list li a {
    display: inline-block;
    width: 100%;
    text-decoration: none;
    color: #fff;
    background-color: #FF6F61;
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s, transform 0.2s;
}

.options-list li a:hover {
    background-color: #FF4C3B;
    transform: translateY(-2px);
}

.suggestions-title {
    font-size: 1.3rem;
    color: #00686B;
    font-weight: bold;
    margin-bottom: 15px;
    text-align: center;
}
</style>