<template>
  <path
    :d="path"
    :fill="fill"
    :ref="
      (el) => {
        petal = el;
      }
    "
  />
</template>

<script setup>
import { gsap } from "gsap";
import { watchEffect, ref } from "vue";

const path = "M 0,0 C -25,-15  -10,-40 10,-50 C 10,-40 25,-15 0,0";
const petal = ref(null);

watchEffect(() => {
  if (petal.value) {
    const waveTimeline = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });

    waveTimeline.fromTo(
      petal.value,
      {
        rotate: angle,
      },
      {
        rotate: angle + Math.floor(Math.random() * 2 - 1) * 7.5,
        duration: Math.random() * (1.5 - 0.5) + 0.5,
        ease: "power1.inOut",
      }
    );

    const timeline = gsap.timeline();

    timeline
      .fromTo(
        petal.value,
        {
          opacity: 0,
          scale: 0,
          rotate: 0,
        },
        {
          opacity: 1,
          scale: 1,
          rotate: angle,
          duration: 1.5,
          ease: "back.out(1.1)",
        }
      )
      .add(waveTimeline);
  }
});

const { angle } = defineProps({
  angle: Number,
  fill: String,
});
</script>
