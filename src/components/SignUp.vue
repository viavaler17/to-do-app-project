
<script setup>
</script>


<template>
  <div class="signup-container">
    <h2>Sign up for an account</h2>
    <form>
      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" type="email" v-model="email" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input id="password" type="password" v-model="password" />
      </div>
      <div class="button-group">
        <button @click="login" class="button login-button">Log in</button>
        <button @click="createAccount" class="button signup-button">Create Account</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.signup-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 2em;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 1em;
}

.form-group {
  margin-bottom: 1.5em;
}

label {
  display: block;
  font-size: 1em;
  color: #555;
  margin-bottom: 0.5em;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 0.75em;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="email"]:focus,
input[type="password"]:focus {
  border-color: #007bff;
  outline: none;
}

.button-group {
  display: flex;
  justify-content: space-between;
}

.button {
  padding: 0.75em 1.5em;
  font-size: 1em;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button {
  background-color: #6c757d;
}

.signup-button {
  background-color: #007bff;
}

.button:hover {
  opacity: 0.9;
}

.button:active {
  transform: scale(0.98);
}
</style>