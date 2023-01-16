<template>
  <div @click="countAdd">{{ count }}</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

const count = ref(0);
const emit = defineEmits<{
  (e: "countAdd", count: Ref): void;
}>();
const countAdd = () => {
  emit("countAdd", count);
};
defineExpose({
  name: "wangsi",
});
</script>

<style scoped></style>
