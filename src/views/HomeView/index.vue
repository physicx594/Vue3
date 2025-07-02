<script setup lang="ts">
import Title from '@/components/Title/index.vue'
</script>

<template>
  <div data-cid="HomeView" class="h-dvh">
    <div class="max-w-screen-xl flex justify-center mx-auto">
      <figure
        class="relative before:absolute before:w-1/3 before:h-5 before:bg-primary after:absolute after:w-5 after:h-4/6 after:bg-primary after:top-0 after:left-0"
      >
        <img
          class="pt-9 pl-9 before:content-[''] before:absolute before:left-0 before:right-0 before:h-12.5 before:bg-gradient-to-b before:from-white before:to-transparent after:content-[''] after:absolute after:left-0 after:right-0 after:h-12.5 after:bg-gradient-to-b after:from-white after:to-transparent"
          src="https://images.unsplash.com/photo-1595786802424-d6efbc413db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
        />
      </figure>
      <div class="inline-flex flex-col justify-between">
        <Title
          title="關於我們"
          class="w-fit before:absolute before:w-1/2 before:-bottom-2_5 before:h-0_5 before:bg-primary before:translate-x-1/2"
        />
        <div class="text-black-1">
          <p>
            在生活步調快速的現代，忙於課業、工作及娛樂上，<br />
            飲食也是一種健康的代表，許多人經常用速食來解決三餐，忽略了營養均衡的重要。
          </p>
          <p>
            Healthy Diet 屬於輕食文化， 採用低鹽低鈉少油，主餐以少量的肉類搭配大量的新鮮
            蔬果，降低消費者對身體的負擔，注重消費者能夠吃得健康又安心。
          </p>
        </div>
        <button class="inline py-2 px-4 border border-0_25 border-tertiary">更多...</button>
      </div>
    </div>
  </div>
</template>
