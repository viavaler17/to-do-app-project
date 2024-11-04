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
    padding-bottom: 70px;
}

</style>