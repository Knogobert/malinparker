<template>
  <main class="gridchars">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@100..700&display=swap" rel="stylesheet">
    <h2>Linjer x{{ x }}, y{{ y }}</h2>
    <div class="grid" ref="gridEl">
      <span v-for="box in grid" :key="box.i" :style="box.style">
        {{ box.char }}
      </span>
    </div>
  </main>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue';
import { useMouse, useMouseInElement, useIntersectionObserver, useRafFn } from '@vueuse/core';

const gridEl = ref(null);
const rows = 10;
const cols = 20;
const char = 'SVEN';
const isOneCharPerCell = char.length > 1;
const fontWeightSpan = 600;

const grid = reactive(
  new Array(rows * cols).fill(null).map((_, i) => ({
    i,
    char: isOneCharPerCell ? char[i % char.length] : char,
    pos: { x: i % cols, y: Math.floor(i / cols) },
    style: { transform: 'rotate(0rad)', '--font-weight': 100 },
    prevAngle: 0,
  }))
);

const { x, y } = useMouse();
const {
  elementX,
  elementY,
  isOutside,
  elementHeight,
  elementWidth
} = useMouseInElement(gridEl);

const animationTime = ref(0);
const animationSpeed = 0.005;
const isInViewport = ref(false);

const unwrapAngle = (prevAngle, newAngle) => {
  const diff = newAngle - prevAngle;
  if (diff > Math.PI) return newAngle - 2 * Math.PI;
  if (diff < -Math.PI) return newAngle + 2 * Math.PI;
  return newAngle;
};

const updateChars = () => {
  if (!isInViewport.value) return;
  const cellWidth = elementWidth.value / cols;
  const cellHeight = elementHeight.value / rows;

  grid.forEach((box) => {
    let angle, weight;

    if (isOutside.value) {
      const waveX = Math.sin(box.pos.x / 3 + animationTime.value) *
        Math.cos(box.pos.y / 4 + animationTime.value * 0.7) *
        Math.sin((box.pos.x + box.pos.y) / 5 + animationTime.value * 1.1) * 2;

      const waveY = Math.cos(box.pos.x / 4 + animationTime.value * 0.8) *
        Math.sin(box.pos.y / 3 + animationTime.value * 1.2) *
        Math.cos((box.pos.x - box.pos.y) / 6 + animationTime.value * 0.9) * 2;

      angle = Math.atan2(waveY, waveX);
      const waveIntensity = (Math.abs(waveX) + Math.abs(waveY)) / 2;
      weight = 100 + Math.round(waveIntensity * fontWeightSpan);

    } else {
      const boxCenterX = box.pos.x * cellWidth + cellWidth / 2;
      const boxCenterY = box.pos.y * cellHeight + cellHeight / 2;
      const dx = elementX.value - boxCenterX;
      const dy = elementY.value - boxCenterY;

      angle = Math.atan2(dy, dx);
      const distance = Math.hypot(dx, dy);
      const maxDistance = Math.hypot(elementWidth.value, elementHeight.value);
      weight = Math.max(100, 700 - Math.round((distance / maxDistance) * fontWeightSpan));
    }

    angle = unwrapAngle(box.prevAngle, angle);
    box.prevAngle = angle;
    box.style.transform = `rotate(${angle}rad)`;
    box.style['--font-weight'] = weight;
  });
};

const { pause, resume } = useRafFn(() => {
  animationTime.value += animationSpeed;
  updateChars();
}, { immediate: false });

const { stop: stopObserver } = useIntersectionObserver(
  gridEl,
  ([{ isIntersecting }]) => {
    isInViewport.value = isIntersecting;
    if (isIntersecting) {
      resume();
    } else {
      pause();
    }
  },
  { threshold: 0.1 }
);

onMounted(resume);
onUnmounted(() => {
  pause();
  stopObserver();
});
</script>

<style>
.gridchars {
  font-family: 'Azeret Mono';
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  background-color: #1d1f20;
  color: #f3f3f3;
  mix-blend-mode: overlay;
  position: relative;
  /* height: 100lvh;
      width: 100lvw; */
  height: 500px;
  width: 1000px;

  & h2 {
    text-align: center;
    padding-top: 30px;
    margin: 0;
  }

  & .grid {
    display: grid;
    grid-template-rows: repeat(v-bind('rows'), 1fr);
    grid-template-columns: repeat(v-bind('cols'), 1fr);
    grid-auto-flow: row;
    justify-content: space-between;
    align-content: space-between;
    justify-items: center;
    align-items: center;
    overflow: hidden;

    position: absolute;
    inset: 0;
    /* height: 100lvh;
              width: 100lvw; */
    height: 500px;
    width: 1000px;

    &>span {
      font-family: 'Azeret Mono';
      display: inline-block;
      font-size: 1.5rem;
      transition: transform 0.3s ease-out, font-weight 0.3s ease-out;
      font-weight: var(--font-weight);
    }
  }
}
</style>
