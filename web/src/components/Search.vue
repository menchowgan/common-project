<script lang="ts" setup>
import { ref, Ref } from "@vue/reactivity";
import { Search } from "@element-plus/icons-vue";
const emits = defineEmits(["typeInputed"]);

const condition: Ref<string> = ref("");

const onTypeInputed = () => {
  emits("typeInputed", condition.value);
};
</script>

<template>
  <el-input
    size="large"
    v-model="condition"
    placeholder="Search..."
    :prefix-icon="Search"
    @keyup.enter.prevent="onTypeInputed"
  />
</template>

<style scoped>
</style>