<script setup lang="ts">
const list = [
  { id: 0, name: '首頁' },
  { id: 1, name: '產品列表' },
  { id: 2, name: '關於我們' }
]
</script>

<template>
  <div data-cid="Header" class="w-full shadow">
    <div class="w-full max-w-screen-xxl flex justify-between mx-auto p-5">
      <div id="logo" class="border border-red-100">logo</div>
      <div>
        <ul class="flex">
          <li v-for="item in list" :key="item.id">
            {{ item.name }}
          </li>
        </ul>
      </div>
      1
    </div>
  </div>
</template>

<style lang="less" scoped></style>
