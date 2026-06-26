<script setup lang="ts">
</script>

<template>
  <router-link to="/user">Go to user view</router-link>
  <br>
  <router-link to="/login">Go to auth view</router-link>
  <br>
  <router-link to="/">Go to guest view</router-link>
  <hr>
  <RouterView></RouterView>
</template>
