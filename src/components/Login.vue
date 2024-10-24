<script setup>
</script>

<template>
    <div class="login-box">
        <h2>Login</h2>
        <form class="email-password">
            <label>E-mail:</label>
            <input type="text" id="login-email" name="login-email">
            <label>Password</label>
            <input type="password" id="login-email" name="login-email">
        </form>
    </div>
</template>

<style scoped>
.login-box{
    border: 2px solid black;
    text-align: center;
    padding: 20px;

    margin: 100px 50px;
}

.email-password{
    display: flex;
    flex-direction: column;

    margin: 40px 0px;
}
</style>