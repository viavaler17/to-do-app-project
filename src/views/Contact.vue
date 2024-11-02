<script setup>
</script>

<template>
    <div class="social-links">
        <h3>Follow Us</h3>
        <p>Stay connected for the latest recipes, cooking tips, and community events!</p>
        <div class="links-container">
            <a href="https://www.instagram.com/" target="_blank" class="social-link">
                <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="Instagram Icon" />
                Instagram
            </a>
            <a href="https://www.facebook.com/" target="_blank" class="social-link">
                <img src="https://cdn-icons-png.flaticon.com/128/2112/2112536.png" alt="Facebook Icon" />
                Facebook
            </a>
            <a href="https://twitter.com/" target="_blank" class="social-link">
                <img src="https://cdn-icons-png.flaticon.com/128/733/733579.png" alt="Twitter Icon" />
                Twitter
            </a>
        </div>
    </div>
</template>

<style scoped>
.social-links {
    margin-top: 20px;
    text-align: center; /* Center the text */
}

.social-links h3 {
    margin-bottom: 15px;
    color: #00686B; /* Teal color */
    font-size: 1.5rem; /* Larger font size for heading */
}

.links-container {
    display: flex;
    justify-content: center; /* Center links horizontally */
    gap: 20px; /* Space between links */
}

.social-link {
    display: flex;
    align-items: center;
    color: #00686B; /* Teal color */
    text-decoration: none; /* No underline */
    padding: 10px 15px; /* Padding for clickable area */
    border: 1px solid transparent; /* Initial border for hover effect */
    border-radius: 5px; /* Rounded corners */
    transition: background-color 0.3s, border-color 0.3s; /* Smooth transition */
}

.social-link img {
    height: 24px; /* Icon size */
    width: 24px;
    margin-right: 8px; /* Space between icon and text */
}

.social-link:hover {
    background-color: rgba(0, 104, 107, 0.1); /* Light background on hover */
    border-color: #00686B; /* Border color on hover */
    border-radius: 5px; /* Rounded corners on hover */
}
</style>