<template>
  <path
    class="petal"
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
        rotate: angleWithVariance,
        duration: idleDuration,
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
          duration: duration,
          ease: "back.out(.75)",
        }
      )
      .add(waveTimeline);
  }
});

const { angle, angleWithVariance, duration, idleDuration } = defineProps({
  angle: Number,
  angleWithVariance: Number,
  duration: Number,
  idleDuration: Number,
  fill: String,
});
</script>