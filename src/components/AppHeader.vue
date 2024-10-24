<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '@/services/supabase';

const items = ref([]);

const fetchItems = async () => {
  try {
    const { data, error } = await supabase
      .from('items')
      .select('*');
    if (error) {
      throw error;
    }
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
                {{ item.name }} - {{ item.age }}
            </li>
        </ul>
    </div>
</template>

<style scoped>
</style>