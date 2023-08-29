<script setup lang="ts">
import logoUrl from "$assets/logo.png";
import type { IList } from "$components/types";
import user from '$assets/icons/user.svg'
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
    title: "user",
  },
  {
    title: "Cart",
  },
];
</script>
<template>
  <div class="im-bg flex justify-between items-center bg-white shadow-md px-12 py-2">
    <user class="fill-current" width="500" height="500" color="#BBB"/>
    <div>
      <img :src="logoUrl" alt="logo" width="60" />
      <svgicon name="user" width="20" color="#ZZZ"/>
    </div>
    <div class="flex space-x-8">
      <div v-for="item in list" class="select-none text-hdprimary">
        <div>{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>
