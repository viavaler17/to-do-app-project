<script setup>

</script>

<template>
    <div class="wrapper">
        <div class="footer">
            <p>
                <router-link to="/contact">Contact us</router-link>
            </p>
            <div id="follow-us">
                <a href="https://www.instagram.com/" target="_blank">
                    Follow us on Instagram
                    <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="Instagram Icon">
                </a>
            </div>
        </div>  
    </div>
</template>

<style scoped>
.wrapper{
    position: relative;
    min-height: 100vh;
}

.footer{
    display: flex;
    flex-direction: column;
    background-color: #00686B;
    color: white;
    align-items: center;
    
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px;
}

img{
    height: 20px;
    width: 20px;
}

#follow-us a{
    display: flex;
    align-items: center;
    gap: 10px
}

a:link{
    color: white;
}

a:visited{
    color: white;
}

</style>