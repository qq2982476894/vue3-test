<template>
  <div class="wrap">
    <div
      class="item"
      v-for="(item, index) in waterList"
      :style="{
        height: item.height + 'px',
        left: item.left + 'px',
        top: item.top + 'px',
        backgroundColor: item.color,
      }"
      :key="index"
    ></div>
  </div>
</template>

<script setup lang="ts">
import type * as I from "@/types";
import { onMounted, reactive } from "vue";
type Iprops = {
  list: I.ImgList[] | undefined;
};
type WaterItem = {
  height: number;
  color: string;
  top?: number;
  left?: number;
};
const props = withDefaults(defineProps<Iprops>(), {
  list: () => [],
});
const width = 130;

const waterList = reactive<WaterItem[]>([]);
const init = () => {
  const heightList: number[] = [];
  const clientWidth = document.querySelector(".wrap")?.clientWidth as number;
  const columnNum = Math.floor(clientWidth / width);
  const center = (clientWidth - width * columnNum) / 2;
  for (let i = 0; i < props.list.length; i++) {
    const element: WaterItem = props.list[i];
    if (i < columnNum) {
      element.left = i * width + center;
      element.top = 20;
      heightList.push(element.height + 20);
      waterList.push(element);
    } else {
      let minH = heightList[0];
      let index = 0;
      heightList.forEach((h, idx) => {
        if (minH > h) {
          minH = h;
          index = idx;
        }
      });
      element.top = minH + 20;
      element.left = index * width + center;
      heightList[index] += element.height + 20;
      waterList.push(element);
    }
  }
};
onMounted(() => {
  init();
});
</script>

<style scoped>
.wrap {
  width: 100%;
  position: relative;
  display: flow-root;
  min-height: 100vh;
}
.wrap .item {
  position: absolute;
  width: 120px;
}
</style>
