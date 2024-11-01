
  <template>
    <div class="auth-container">
      <div class="auth-card">
      <h1>Sign Up</h1>
      <form @submit.prevent="handleSignup">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </div>
  <Propositions></Propositions>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { signup } from '@/services/database';
  import { useRouter } from 'vue-router';
import Propositions from '@/components/Propositions.vue';

  const email = ref('');
  const password = ref('');
  const router = useRouter();
  
  const handleSignup = async () => {
    try {
      const { user, data } = await signup(email.value, password.value);
      console.log('User signed up:', user, data);
      router.push('/profile');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };
  </script>

  <style scoped>
  .auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
}

.auth-card {
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align: center;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

input {
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 16px;
}

button {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: none;
  background-color: #28a745;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}
</style>