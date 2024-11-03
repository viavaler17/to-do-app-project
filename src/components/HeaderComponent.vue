<script setup>
import { RouterLink } from 'vue-router';
import { ref, onMounted } from 'vue';
import { supabase } from '@/services/supabase';

const isAuthenticated = ref(true);

// is responsible for changing the header as soon as the user is logged in/signed up/logged out
onMounted(() => {
  supabase.auth.onAuthStateChange((_, session) => {
    isAuthenticated.value = !!session; // Check if a session exists to set authentication status
  });
});

</script>

<template>
    <div class="header">
    <router-link v-if="!isAuthenticated" to="/login" class="header-router">
      <p>Log in / Sign Up</p>
      <img src="https://cdn-icons-png.flaticon.com/128/3580/3580168.png" alt="Log in/Sign up icon">
    </router-link>
    <router-link v-else to="/profile" class="header-router">
      <p>Personal Account</p>
      <img src="https://cdn.iconscout.com/icon/free/png-512/free-user-icon-download-in-svg-png-gif-file-formats--account-profile-ios-ipad-os-13-pack-interface-icons-1568997.png?f=webp&w=512" alt="Profile icon">
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