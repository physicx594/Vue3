<script setup lang="ts">
import Navbar from "$components/Navbar/index.vue";
import Footer from "$components/Footer/index.vue";
</script>

<template>
  <Navbar />
  <router-view></router-view>
  <Footer />
</template>
