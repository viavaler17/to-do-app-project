<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '@/services/supabase';

const items = ref([]);

// const fetchItems = async () => {
//   try {
//     const { data, error } = await supabase
//       .from('items')
//       .select('*');
//     if (error) {
//       throw error;
//     }
//     items.value = data;
//   } catch (error) {
//     console.error('Error fetching data:', error.message);
//   }
// };

const fetchItems = async () => {
  try {
    const { data, error } = await supabase
      .from('items')
      .select('*');
    if (error) {
      throw error;
    }
<<<<<<< HEAD
  
=======
    console.log('Fetched data:', data); // Add this line
>>>>>>> 6a8152ee96165970a8ce8b4ca1089177b506123b
    items.value = data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
};

onMounted(fetchItems);
</script>

<template>
    <div>
        <ul>
            <li v-for="item in items" :key="item.id">
<<<<<<< HEAD
                {{ item.title }} - {{ item.directions }} - {{  item.category }}
=======
                {{ item.title }} - {{ item.directions }} - {{ item.category }}
>>>>>>> 6a8152ee96165970a8ce8b4ca1089177b506123b
            </li>
        </ul>
    </div>
</template>

<style scoped>
</style>