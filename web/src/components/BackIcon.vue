<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()
const onBack = () => {
  router.go(-1);
};

</script>

<template>
  <el-icon class="back-icon" @click="onBack"><arrow-left-bold /></el-icon>
</template>

<style lang="scss" scoped>
@import '../style/flex-style.scss';
@import '../style/theme.scss';
  .back-icon {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border: 2px solid $theme;
    color: $theme-color;
    position: fixed;
    top: 30px;
    left: 30px;
    box-shadow: var(--el-box-shadow);
    &:hover {
      border: 2px solid #ccc;
      color: #ccc;
      cursor: pointer;
    }
  }
</style>