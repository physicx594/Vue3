<script setup lang="ts">
import { BackgroundPath, Title, Content } from '@/enums/banner.enum'
import { RouterName } from '@/enums/router.enum'
import { useRoute, type RouteRecordName } from 'vue-router'

const route = useRoute()

const getUrlFromPath = (routeName: RouteRecordName): string => {
  switch (routeName) {
    case RouterName.Home:
      return BackgroundPath.Home
    case RouterName.About:
      return BackgroundPath.About
    case RouterName.Products:
      return BackgroundPath.Products
    default:
      return BackgroundPath.Home
  }
}

const getTitle = (routeName: RouteRecordName): string => {
  switch (routeName) {
    case RouterName.Home:
      return Title.Home
    case RouterName.About:
      return Title.About
    case RouterName.Products:
      return Title.Products
    default:
      return Title.Home
  }
}

const getContent = (routeName: RouteRecordName): string => {
  switch (routeName) {
    case RouterName.Home:
      return Content.Home
    case RouterName.About:
      return Content.About
    case RouterName.Products:
      return Content.Products
    default:
      return Content.Home
  }
}
</script>

<template>
  <div
    data-cid="Banner"
    class="w-full h-dvh bg-fixed bg-center bg-no-repeat bg-cover"
    :style="{ backgroundImage: `url(${getUrlFromPath(route.name || '')})` }"
  >
    <div class="w-full h-full flex flex-col items-center justify-center text-primary">
      <h1 class="font-Yellowtail text-7xl">
        {{ getTitle(route.name || '') }}
      </h1>
      <h1 class="border border-primary text-2xl">{{ getContent(route.name || '') }}</h1>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
