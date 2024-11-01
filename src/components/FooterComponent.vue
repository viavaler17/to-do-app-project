<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="wrapper">
        <div class="footer">
            <p>
                <router-link to="/contact">Contact us</router-link>
            </p>
            <div id="follow-us">
                <a href="https://www.instagram.com/" target="_blank">
                    Follow us on Instagram
                    <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="Instagram Icon">
                </a>
            </div>
        </div>  
    </div>
</template>

<style scoped>
html, body {
    height: 100%; /* Ensure full height for the body */
    margin: 0;    /* Remove default margin */
}

.wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Use min-height to allow the footer to stick at the bottom */
} 

.footer {
    display: flex;
    flex-direction: column;
    background-color: #00686B;
    color: white;
    align-items: center;
    width: 100%;
    padding: 20px;
    margin-top: auto; /* Push the footer to the bottom of the page */
}

img {
    height: 20px;
    width: 20px;
}

#follow-us a {
    display: flex;
    align-items: center;
    gap: 10px;
}

a:link, a:visited {
    color: white;
}
</style>