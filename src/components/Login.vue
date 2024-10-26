<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; 
import { supabase } from '@/services/supabase'; 

const router = useRouter();

const email = ref('');
const password = ref('');
const errorMessage = ref('');


const signInUser = async () => {
  
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });

    if (error) {
      errorMessage.value = error.message; 
    } else {
      errorMessage.value = ''; 
      router.push('/ProfileDetails'); 
      
    }
  } catch (err) {
    errorMessage.value = 'Error logging in:'+err;
  }
};
</script>

<template>
  <div class="login-box">
    <h2>Login</h2>
    <form class="email-password" @submit.prevent="signInUser">
      <label for="email">E-mail:</label>
      <input type="email" id="login-email" v-model="email" required />

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required />

      <button type="submit">Sign In</button>
    </form>

    <p v-if="errorMessage">{{ errorMessage }}</p>
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