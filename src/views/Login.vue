<script setup>
import Propositions from '@/components/Propositions.vue';
import LogInByValeria from './LogInByValeria.vue';
</script>

<template>
<div class="login-container">
    <!-- place for holding login element that will lead after clicking the button to ProfileMain view -->
    <LogInByValeria></LogInByValeria>
    <Propositions></Propositions>
</div>
</template>

<style scoped>
.login-container {
    background: linear-gradient(135deg, #6e8efb, #a777e3);
    padding: 70px 0px 40px 0px;
    background-color: #ffffff;
}

</style>