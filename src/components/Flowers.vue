<template>
  <div class="flex gap-10 flex-wrap justify-center">
    <div
      v-for="d in filteredData"
      :key="d.imdbID"
      class="
        flex flex-col flex-grow
        justify-between
        items-center
        text-center
        p-5
        max-w-full
        bg-gray-50
      "
    >
      <div className="max-w-content w-full">
        <p className="mx-auto mt-2">{{ d.Title }}</p>
        <p className="font-light text-sm">{{ d.Director }}</p>
        <p>{{ search }}</p>
      </div>
      <Flower :data="d" :dataset="data" />
      <div className="max-w-content w-full flex flex-col">
        <p className="font-light text-xl mt-10 ">{{ d.imdbRating }}</p>
        <p className="font-light mx-auto">{{ d.imdbVotes }} Votes</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Flower from "./Flower.vue";
import * as d3 from "d3";
import _ from "lodash";
import { ref } from "vue";
import { watchEffect } from "@vue/runtime-core";
import ScrollTrigger from "gsap/ScrollTrigger";

const props = defineProps({
  search: String,
});

const filteredData = ref([]);

const data = await d3
  .json(
    "https://raw.githubusercontent.com/sxywu/filmflowers/master/movies.json"
  )
  .then((res) => _.values(res));

filteredData.value = data;

watchEffect(() => {
  if (props.search) {
    filteredData.value = data.filter((d) =>
      d.Title.toLowerCase().includes(props.search.toLowerCase())
    );
  } else {
    filteredData.value = data;
  }
});
</script>
