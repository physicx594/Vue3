<script setup lang="ts">
import { navigationList, type NavigationItem } from '@/constants/header-constants'

import logoIcon from '@/assets/header/logo.png'
import Picture from '@/components/Picture/index.vue'
import router from '@/router'

const handleClick = (item: NavigationItem) => {
  router.push(item.path)
}
</script>

<template>
  <div
    data-cid="Header"
    class="w-full h-16 shadow flex justify-between items-center px-5 bg-white fixed"
  >
    <div class="w-15 cursor-pointer">
      <RouterLink to="/">
        <Picture :src="logoIcon" />
      </RouterLink>
    </div>
    <ul class="flex items-center space-x-4">
      <li
        v-for="item in navigationList"
        :key="item.id"
        @click="handleClick(item)"
        class="cursor-pointer"
      >
        <span v-if="item.name">
          {{ item.name }}
        </span>
        <div v-if="item.icon" class="w-5 h-5">
          <Picture :src="item.icon" />
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped></style>
