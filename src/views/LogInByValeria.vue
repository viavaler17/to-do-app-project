<template>
    <div class="auth-container">
      <div class="auth-card">
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
        <input v-model="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form><br>
      <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
      <p class="signup-link">Don't have an account?</p>
      <router-link to="/signup">Sign up</router-link>
    </div>
  </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { login } from '@/services/database';
  import { useRouter } from 'vue-router';
  import { RouterLink } from 'vue-router';
  
  const email = ref('');
  const password = ref('');
  const errorMessage = ref('');
  const router = useRouter();
  
  const handleLogin = async () => {
    errorMessage.value = '';
    try {
      const user = await login(email.value, password.value);
      console.log('User logged in:', user);
      router.push('/profile');
    } catch (error) {
      errorMessage.value = error.message;
      console.error('Error logging in:', error);
    }
  };
  </script>

  <style scoped>
.auth-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 24px;
}

.auth-card {
  width: 350px;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  text-align: center;
  transition: transform 0.3s;
}

.auth-card:hover {
  transform: translateY(-5px);
}

h1 {
  font-size: 26px;
  color: #333;
  margin-bottom: 0.5rem;
}

p {
  color: #666;
  margin-bottom: 1.5rem;
  font-weight: bold;
}

/* Input styling */
input {
  width: 100%;
  padding: 0.75rem;
  margin: 0.5rem 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
  transition: all 0.2s;
}

input:focus {
  border-color: #6e8efb;
  outline: none;
}

button {
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  border-radius: 8px;
  border: none;
  background-color: #28a745;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
}

button:hover {
  background-color: #5a75d9;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
}

.error {
  color: #e74c3c;
  font-size: 14px;
  margin-top: 1rem;
}
</style>