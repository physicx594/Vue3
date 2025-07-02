<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
<template>
  <span class="relative text-3xl text-primary font-bold">
    {{ title }}
  </span>
</template>

<style scoped></style>
