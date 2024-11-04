<script setup>
</script>

<template>
    <div class="about-container">
        <h1>About Us</h1>
        <h3>Welcome to Cook the World! 🌍🍽️</h3><br>
        <div class="about-content">
            <img src="https://images.pexels.com/photos/7601413/pexels-photo-7601413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Cooking" class="about-image" />
            <div class="content">
                <h2>How we are?</h2>
                <p>
                    We are two friends, united by the love of cooking, who decided to share their passion with the world. We believe that cooking don't have to be complicated to be delicious. Inspired by countless joyful hours in the kitchen, we created this recipe webpage to show that anyone can create mouthwatering dishes with ease. Our goal? To make cooking fun, simple, and full of flavor for everyone who visits.
                </p>
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
    max-width: 1140px;
    /* changed the max-width and margin to match other views so teh screen doesn't jump */
    margin: 70px auto;
    padding: 0 20px;
    background-color: #ffffff;
}

h1 {
    color: #00A6A6; /* Modern teal color */
    margin-bottom: 15px;
    font-size: 2.5rem;
    font-weight: 800;
}

p {
    color: #333;
    line-height: 1.7;
    font-size: 1.1rem;
}

h2 {
    color: #FF6F61;
    margin: 25px 0 10px;
    font-size: 1.75rem;
    font-weight: 800;
}

h3 {
    font-weight: 600;
}

.about-content {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 30px;
}

.about-image {
    max-width: 45%;
    flex: 1;
    border-radius: 12px;
    transition: transform 0.3s, box-shadow 0.3s;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.about-image:hover {
    transform: scale(1.03);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
}

.content {
    flex: 2;
    text-align: left;
    font-size: 1.1rem;
}

.about-container p {
    margin-bottom: 15px;
}

@media (max-width: 768px) {
    .about-content {
        flex-direction: column;
    }

    .about-image,
    .content {
        max-width: 100%;
    }

    h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1.5rem;
    }
}
</style>
