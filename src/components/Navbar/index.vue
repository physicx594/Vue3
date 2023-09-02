<script setup lang="ts">
import logoUrl from "$assets/logo.png";
import type { IList } from "$components/types";

const list: IList[] = [
  {
    title: "首頁",
  },
  {
    title: "產品列表",
  },
  {
    title: "關於我們",
  },
  {
    type: "svg",
    title: "user",
  },
  {
    type: "svg",
    title: "shoppingCart",
  },
];
</script>
<template>
  <div
    class="im-bg flex justify-between items-center bg-white shadow-md px-12 py-2"
  >
    <div>
      <img :src="logoUrl" alt="logo" width="60" />
    </div>
    <div class="flex items-center space-x-8">
      <div v-for="item in list" class="select-none text-hdprimary">
        <svgicon v-if="item.type" :name="item.title" width="18" height="18" />
        <div v-else>{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>
