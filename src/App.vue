<template>
  <main class="min-h-screen py-10 px-5">
    <div class="max-w-screen-2xl mx-auto flex flex-col items-center">
      <h1 class="mb-10 text-4xl font-light">
        <span class="text-yellow-300">D3</span> &
        <span class="text-green-500">Vue</span> Data Visualization Demo
      </h1>
      <input
        class="
          mb-5
          bg-gray-100
          py-3
          px-7
          max-w-prose
          w-full
          text-lg
          focus:outline-none
          rounded-lg
        "
        type="text"
        placeholder="Search"
        v-model="search"
      />
      <p class="mb-5 min-h-6 font-light text-sm">
        <span v-if="search.length > 0">
          Showing movies containing "<span class="font-normal">{{
            search
          }}</span
          >" in the title
        </span>
      </p>
      <suspense>
        <template #default>
          <Flowers :search="search" />
        </template>
      </suspense>
    </div>
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
