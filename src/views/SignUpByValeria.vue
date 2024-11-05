
  <template>
    <div class="sign-up">
      <div class="authentication">
      <h1>Sign Up</h1>
      <form @submit.prevent="handleSignup">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form><br>
      <p class="signup-link">Want to log in?</p>
      <router-link to="/login">Log in</router-link>
    </div>
  </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { signup } from '@/services/database';
  import { useRouter } from 'vue-router';

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
  .sign-up {
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center; 
  height: 100vh;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
}

.authentication {
  width: 350px;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  text-align: center;
  transition: transform 0.3s;
}

.authentication:hover {
  transform: translateY(-5px);
}

p{
  color: #666;
  margin-bottom: 1.5rem;
  font-weight: bold;
}

h1 {
  font-size: 26px;
  color: #333;
  margin-bottom: 0.5rem;
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
</style>