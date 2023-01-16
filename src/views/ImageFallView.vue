<template>
  <div class="container">
    <WaterFall :list="imgList"></WaterFall>
  </div>
</template>

<script setup lang="ts">
import WaterFall from "@/components/WaterFall.vue";
import type * as I from "@/types";
const imgList: I.ImgList[] = [];
for (let index = 0; index < 40; index++) {
  imgList.push({
    height: random(100, 300),
    color: `rgba(${random(0, 255)}, ${random(0, 255)}, ${random(
      0,
      255
    )}, ${Math.random()})`,
  });
}
function random<T extends number>(min: T, max: T) {
  return Math.round(Math.random() * (max - min) + min);
}
</script>

<style scoped></style>
