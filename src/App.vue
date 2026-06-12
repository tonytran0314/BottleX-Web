<script setup lang="ts">
  import Home from './components/Home.vue';
</script>

<template>
  <RouterLink to="/">Go to Home</RouterLink>
  <RouterLink to="/auth">Go to Auth</RouterLink>

  <RouterView></RouterView>
</template>
