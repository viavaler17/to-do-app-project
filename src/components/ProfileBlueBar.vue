<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  profileHeader: {
    type: String,
    default: ''
  }
});
</script>

<template>
    <div class="arrow-back-container">
        
        <p>
            <router-link to="/profile" id="arrow-back">
                <img src="https://cdn-icons-png.flaticon.com/128/2459/2459427.png" alt="Go back">
                Back to profile
            </router-link>
        </p>
        <h2 id="back-to-profile-text">
          {{ profileHeader }}
        </h2>
    </div>
</template>

<style scoped>
*{
    background-color: #f0f8ff;
}

.arrow-back-container{
    height: 80px;
    width: 100%;
    padding: 15px 10px;
    align-items: center;
    margin-bottom: 20px;

    display: flex;
    position: relative;
}

  #arrow-back{
    height: 50px;
    color: black;
    font-weight: 600;

    display: flex;
    align-items: center;
    gap: 5px;
  }

  #arrow-back img{
    height: 20px;
  }

  h2{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;

    color: #FF6F61;
    font-weight: 800;
  }
</style>