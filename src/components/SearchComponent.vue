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

.search-component {
    width: 100vw;
    max-width: 100%;
    text-align: center;
    padding: 40px 20px;
    margin: 0;
    color: #fff;
    background: linear-gradient(135deg, #FF6B6B, #FFD93D, #6BCB77, #4D96FF);
    background-size: 300% 300%;
    animation: gradientAnimation 8s ease infinite;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
}

@keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.search-component h2 {
    font-size: 2rem;
    color: #fff;
    margin-bottom: 10px;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
}

.search-component p {
    color: #e0e0e0;
    margin-bottom: 20px;
}

.search-bar {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    margin: 0 auto;
    max-width: 600px;
    background-color: #fff;
    padding: 10px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease;
}

.search-bar:hover {
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.25);
}

.search-bar input {
    flex: 1;
    padding: 10px 15px;
    border: none;
    border-radius: 8px;
    outline: none;
    background-color: #FFEECF;
    color: #333;
    font-size: 1rem;
    transition: background-color 0.3s ease;
}

.search-bar input::placeholder {
    color: #999;
}

.search-bar input:focus {
    background-color: #FFF5E1;
}

#magnifying-glass {
    height: 1.5rem;
    cursor: pointer;
    transition: transform 0.2s ease, opacity 0.3s ease;
    opacity: 0.8;
}

#magnifying-glass:hover {
    transform: scale(1.1);
    opacity: 1;
}
</style>