
<script setup>
import Propositions from '@/components/Propositions.vue';
</script>

<template>
  <div class="main-container">
  
    <header class="welcome-header">
      <h1>Cook the World</h1>
      <h2>Recipes made</h2>
      <h1>easy!</h1>
      <p>"Cook the world"</p>
      <p>
        is a dynamic platform for culinary enthusiasts, providing a wide range of recipes for all skill levels. It encourages users to explore international cuisines, turning meals into exciting cultural adventures.
      </p>
    </header>

    <div class="search-bar">
      <input type="text" placeholder="Click here to browse..">
      <img src="https://cdn-icons-png.flaticon.com/128/3031/3031293.png" alt="search icon">
    </div>
    <Propositions />
  </div>
</template>


<style scoped>
/* Main container with background image and overlay */
.main-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 100px); /* Adjust this value based on footer height */
  width: 100%; /* Full viewport width */
  padding: 20px;
  text-align: center;
  color: #fff; /* Text color for readability */
  background: url('https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2') center/cover no-repeat fixed;
}

/* Dark overlay to improve text readability */
.main-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent dark overlay */
  z-index: 0;
}

/* Ensure all child elements are positioned above the overlay */
.welcome-header,
.search-bar,
.propositions {
  position: relative;
  z-index: 1;
}

/* Header Styling */
.welcome-header {
  margin-bottom: 40px;
}

.welcome-header h1 {
  font-size: 2.5rem;
  color: #FFEB3B; /* Bright color for contrast */
  margin: 10px 0;
}

.welcome-header h2 {
  font-size: 1.5rem;
  color: #FFEB3B; /* Matching color */
  margin: 5px 0;
}

.welcome-header p {
  font-size: 1rem;
  color: #FFFFFF;
  line-height: 1.5;
}

/* Search Bar Styling */
.search-bar {
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8); /* Light semi-transparent background */
  border-radius: 5px;
  padding: 8px;
  width: 100%;
  max-width: 500px;
  margin-bottom: 40px;
}

.search-bar input {
  flex: 1;
  padding: 10px;
  border: none;
  outline: none;
  font-size: 1rem;
  background: transparent;
  color: #333;
}

.search-bar img {
  width: 24px;
  height: 24px;
  margin-left: 8px;
  cursor: pointer;
}

/* Propositions Component Styling */
.propositions {
  width: 100%;
}

</style>

