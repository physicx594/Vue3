<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { twMerge } from "tailwind-merge";
import logoUrl from "$assets/logo.png";
import type { IList } from "$components/types";

const router = useRouter();
let active = ref(0);
const list: IList[] = [
  {
    id: 0,
    title: "首頁",
    path: "/",
  },
  {
    id: 1,
    title: "產品列表",
    path: "/products",
  },
  {
    id: 2,
    title: "關於我們",
    path: "/about",
  },
  {
    id: 3,
    title: "user",
    path: "/user",
    type: "svg",
  },
  {
    id: 4,
    title: "shoppingCart",
    path: "/cart",
    type: "svg",
  },
];

const handleClick = (item: IList) => {
  const { path, id } = item;
  active.value = id;
  router.push(path);
};
</script>

<template>
  <div
    data-cid="Navbar"
    class="im-bg flex justify-between items-center bg-white shadow-md px-12 py-2"
  >
    <div>
      <img :src="logoUrl" alt="logo" width="60" />
    </div>
    <div class="flex items-center space-x-8">
      <div
        v-for="item in list"
        :class="
          twMerge(
            `relative select-none text-hdprimary cursor-pointer hover:after:duration-150  after:content-[''] after:bg-hdcontrast after:h-[2px] after:w-0 after:block after:m-auto hover:after:w-[70%] hover:text-hdcontrast`,
            item.id === active ? 'text-hdcontrast after:w-[70%]' : ''
          )
        "
        @click="() => handleClick(item)"
      >
        <svgicon v-if="item.type" :name="item.title" width="18" height="18" />
        <div v-else>{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>
