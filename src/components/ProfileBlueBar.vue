<script setup>
</script>

<template>
    <div class="arrow-back-container">
        
        <p>
            <router-link to="/profile" id="arrow-back">
                <img src="https://cdn-icons-png.flaticon.com/128/2459/2459427.png" alt="Go back">
                Back to profile
            </router-link>
        </p>
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
}

  #arrow-back{
    height: 50px;
    color: black;
    font-weight: 600;
    font-size: 8;

    display: flex;
    align-items: center;
    gap: 5px;
  }

  #arrow-back img{
    height: 20px;
  }

</style>