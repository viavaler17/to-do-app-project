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
    <table>
      <thead>
        <tr class="table-header">
          <th>Title</th>
          <th>Directions</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.directions }}</td>
          <td>{{ item.category }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    border-radius: 8px; 
    overflow: hidden; 
}

.table-header {
    background: linear-gradient(90deg, #4CAF50, #81C784); /* Gradient background */
    color: white; /* White text color */
    text-align: left;
    font-weight: bold; /* Bold header text */
}

th, td {
    padding: 15px; /* Increased padding */
    border: 1px solid #e0e0e0; /* Light border */
    transition: background-color 0.3s; /* Smooth background transition */
}

tr:nth-child(even) {
    background-color: #f7f7f7; /* Light background for even rows */
}

tr:nth-child(odd) {
    background-color: #ffffff; /* White background for odd rows */
}

tr:hover {
    background-color: rgba(255, 255, 255, 0.8); /* Lighter background on hover */
}

tr:hover td {
    color: #4CAF50; /* Change text color on hover */
}

h2 {
    margin-bottom: 10px;
    font-family: 'Arial', sans-serif; /* Custom font */
    font-size: 24px; /* Larger heading */
    color: #333; /* Darker text color */
}

</style>