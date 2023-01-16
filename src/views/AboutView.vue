<template>
  <div class="about">
    <h1>This is an about page</h1>
    <HeaderVue ref="header" @count-add="countAdd" />
    <button @click="textChange">点我</button>
    text:<span>{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Ref } from "vue";
import HeaderVue from "@/components/Header.vue";
const header = ref<InstanceType<typeof HeaderVue>>();
const text = ref();
const textChange = () => {
  text.value = "Hello";
};
// 修改子组件的值
const countAdd = (valueRef: Ref, type = "add") => {
  if (type === "add") {
    valueRef.value += 1;
  } else {
    valueRef.value -= 1;
  }
};
onMounted(() => {
  text.value = header.value?.name;
});
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
