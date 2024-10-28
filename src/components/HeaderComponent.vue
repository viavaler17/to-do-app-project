<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="header">
        <router-link to="/login" class="header-router">
            <p>Log in</p>
            <img src="https://cdn-icons-png.flaticon.com/128/3580/3580168.png" alt="Log in/Sign up icon">        
        </router-link>
    </div>
</template>

<style scoped>
.header-router {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 15px;
    align-items: center;

    margin: 0.5rem;

    color: black;
    font-size: 1rem;
}

.header img{
    height: 30px;
}
</style>