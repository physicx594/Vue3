<script setup lang="ts">
const props = defineProps<{
  src: string
}>()
</script>

<template>
  <img :src="props.src" alt="" :class="['w-full']" />
</template>

<style lang="less" scoped></style>
