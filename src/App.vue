<template>
  <main
    class="
      flex flex-col
      items-center
      min-h-screen
      p-10
      max-w-screen-2xl
      mx-auto
    "
  >
    <h1 class="mb-10 text-4xl font-light">
      <span class="text-yellow-500">D3</span> &
      <span class="text-green-500">Vue</span> Data Visualization Demo
    </h1>
    <input
      class="
        mb-10
        bg-gray-50
        py-2
        px-4
        font-light
        max-w-prose
        w-full
        text-lg
        focus:outline-none
        focus:bg-gray-100
      "
      type="text"
      placeholder="search"
      v-model="search"
    />
    <p class="mb-5 h-10">
      <span v-if="search.length > 0">
        Showing movies containing "{{ search }}" in the title
      </span>
    </p>
    <suspense>
      <template #default>
        <Flowers :search="search" />
      </template>
    </suspense>
  </main>
  <footer class="flex bg-black p-4">
    <p class="mx-auto text-white font-light text-sm">
      &copy; evanchristians {{ new Date().getFullYear() }}
    </p>
  </footer>
</template>

<script setup>
import { defineAsyncComponent, watchEffect } from "@vue/runtime-core";
import { gsap } from "gsap";
import { ref } from "vue";
import ScrollTrigger from "gsap/ScrollTrigger";

const search = ref("");

gsap.registerPlugin(ScrollTrigger);

const Flowers = defineAsyncComponent(() => import("./components/Flowers.vue"));
</script>
