<script setup>
</script>

<template>
    <div class="about-container">
        <h1>About Us</h1>
        <p>Welcome to Cook the World! 🌍🍽️</p>
        <div class="about-content">
            <img src="https://images.pexels.com/photos/7601413/pexels-photo-7601413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Cooking" class="about-image" />
            <div class="text-content">
                <h2>Our Mission</h2>
                <p>
                    At Cook the World, we believe that cooking should be fun and accessible for everyone! Our platform is dedicated to sharing a variety of recipes that span across cultures and cuisines. Whether you are a beginner or a seasoned chef, there's something here for you!
                </p>
                <h2>Join Our Community</h2>
                <p>
                    Share your culinary creations, discover new flavors, and connect with fellow food lovers. Together, we can explore the world through cooking, one recipe at a time!
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.about-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
    color: #00686B; /* Teal color */
    margin-bottom: 10px;
}

h2 {
    color: #FF6F61; /* Coral color for subheadings */
    margin: 20px 0 10px;
}

.about-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.about-image {
    max-width: 100%;
    border-radius: 8px;
}

.text-content {
    text-align: left; /* Align text to the left for readability */
}

p {
    color: #333; /* Dark text for contrast */
    line-height: 1.6;
}
</style>