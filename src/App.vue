<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header/index.vue'
</script>

<template>
  <Header />
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/products">Products</RouterLink>
  </nav>
  <RouterView />
</template>
