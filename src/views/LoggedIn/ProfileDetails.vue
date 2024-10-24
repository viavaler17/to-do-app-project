<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '@/services/supabase';

const users = ref([]);

const fetchUsers = async () => {
  const { data, error } = await supabase.from('user').select('*');
  if (error) {
    console.error('Error fetching users:', error);
  } else {
    users.value = data;
  }
};

onMounted(fetchUsers);

</script>

<template>
<div>
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.email }} - {{ user.password }} - {{ user.name }} - {{ user.age }}
    </li>
    </ul>
  </div>
</template>

<style scoped>
</style>