<script setup>
</script>

<template>
    <div class="search-component">
        <h2>Ready to cook the world?</h2>
        <p>Browse using categories and tags or start typing ingredients below:</p>
        <div class="search-bar">
            <input type="text" placeholder="Start typing ingredient's name..">
            <img src="https://cdn-icons-png.flaticon.com/128/3031/3031293.png" id="magnifying-glass">
        </div>
    </div>
</template>

<style scoped>
    .search-component{
        text-align: center;
        margin: 40px;
    }

    .search-bar{
        display: flex;
        align-items: center;
        gap: 10px;
        justify-content: center;
        margin: 20px;
    }

    .search-bar input{
        width: 300px;
    }

    #magnifying-glass{
        height: 1rem;
    }
</style>