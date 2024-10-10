<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header/index.vue'
import Banner from '@/components/Banner/index.vue'
</script>

<template>
  <Header />
  <Banner />
  <RouterView />
</template>
