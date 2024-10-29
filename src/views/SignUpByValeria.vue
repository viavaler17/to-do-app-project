
  <template>
    <div>
      <h1>Sign Up</h1>
      <form @submit.prevent="handleSignup">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { signup } from '@/services/database';
  import { useRouter } from 'vue-router';
  import { supabase } from '@/services/supabase';

  const username = ref('');
  const email = ref('');
  const password = ref('');
  const router = useRouter();
  
  // const isValidEmail = (email) => {
  //   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailPattern.test(email);
  // };
  
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
</style>