<template>
  <div
    :style="`
      width:${size * 2}px;
      height:${size * 2}px;
      margin-bottom:${-size * 0.6}px;
      margin-top:${-size * 0.2}px;
    `"
    :ref="(el) => (flower = el)"
  >
    <svg
      v-if="inView"
      x="0px"
      y="0px"
      :width="size * 2"
      :height="size * 2"
      :viewBox="`0 0 ${size * 2} ${size * 2}`"
    >
      <g :transform="`translate(${size}, ${size}) scale(${petalSize})`">
        <Petal
          v-for="(d, i) in petals"
          :key="i"
          :fill="d.fill"
          :angle="d.angle"
          :duration="d.duration"
          :idleDuration="d.idleDuration"
        />
      </g>
    </svg>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import * as d3 from "d3";
import _ from "lodash";
import { flowerConfig } from "../lib/flowerConfig";
import { getAngle } from "../lib/getAngle";
import { watchEffect } from "vue";
import Petal from "./Petal.vue";

const size = 140;
const { petalSize, petalCount } = flowerConfig(dataset, data, size);
const flower = ref(null);
const inView = ref(false);

const petals = _.times(petalCount, (i) => ({
  angle: getAngle(i, petalCount),
  fill: d3.interpolateViridis(Math.random() * (1 - 0.25) + 0.25),
  idleDuration: Math.random() * (1.5 - 0.5) + 0.5,
  duration: 0.75 + Math.random() * 0.5,
}));

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    inView.value = entry.isIntersecting;
  });
};

const observer = new IntersectionObserver(callback, {
  root: null,
  rootMargin: "0px",
  threshold: 0.25,
});

watchEffect(() => {
  if (flower.value) {
    observer.observe(flower.value);
  }
});

const { data, dataset } = defineProps({
  data: Object,
  dataset: Array,
});
</script>
