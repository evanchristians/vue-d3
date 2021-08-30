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
    <input
      class="mb-20 bg-gray-100 text-xl py-2 px-4"
      type="text"
      v-model="search"
    />
    <p class="mb-5" v-if="search.length > 0">
      Showing movies containing "{{ search }}" in the title
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
