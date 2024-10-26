<script setup>
import { ref } from 'vue';
import { supabase } from '@/services/supabase';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');


</script>

<template>
  <div class="login-box">
    <h1>Sign Up</h1>
    <form class="email-password" @submit.prevent="signUp">
      <label for="email">E-mail:</label>
      <input type="email" id="login-email" v-model="email" required />

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required />

      <button type="submit">Sign In</button>
    </form>
  </div>
</template>

<style scoped>
.login-box{
    border: 2px solid black;
    text-align: center;
    padding: 20px;

    margin: 100px 50px;
}

.email-password{
    display: flex;
    flex-direction: column;

    margin: 40px 0px;
}
</style>