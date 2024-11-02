
<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="profile-container">
        <div class="greetings">
            <h1>Hello!</h1>
            <p>Select from the options below:</p>
        </div>

        <ul class="options-list">
            <li><router-link to="/addrecipe">Add a Recipe</router-link></li><br>
            <li><router-link to="/profiledetails">Your Details</router-link></li><br>
            <li><router-link to="/favourited">Favourited recipes</router-link></li>

        </ul>
    </div>
</template>

<style scoped>
.profile-container {
    max-width: 600px; 
    margin: 0 auto; 
    padding: 20px;
    text-align: center; 
    background-color: #f0f8ff; 
    border-radius: 8px; 
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
}

.greetings {
    margin-bottom: 30px;
}

.greetings h1 {
    color: #00686B; 
    font-size: 2.5rem; 
}

.greetings p {
    font-size: 1.2rem; /* Slightly larger paragraph */
    color: #333; /* Dark text for contrast */
}

.options-list {
    list-style: none; /* Remove default list styling */
    padding: 0; /* Remove padding */
}

.options-list li {
    margin: 15px 0; /* Space between items */
}

.options-list li a {
    text-decoration: none; /* No underline */
    color: #fff; /* White text for links */
    background-color: #FF6F61; /* Coral background for links */
    padding: 10px 20px; /* Padding for clickable area */
    border-radius: 5px; /* Rounded corners for buttons */
    transition: background-color 0.3s; /* Smooth background transition */
}

.options-list li a:hover {
    background-color: #FF4C3B; /* Darker shade on hover */
}
</style>