
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
    <Propositions></Propositions>
  </div>
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
  flex-direction: column; 
  justify-content: center;
  align-items: center; 
  height: 100vh;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
}

.auth-card {
  width: 350px;
  padding: 2rem;
  margin: 80px;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  text-align: center;

  /* width: 350px;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  text-align: center;
  transition: transform 0.3s; */
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
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}
</style>