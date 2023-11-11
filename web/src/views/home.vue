<script lang="ts" setup>
import { useWindowSize } from '@vueuse/core';
const { height } = useWindowSize()

const fullHeight = ref(height + "px")

</script>

<template>
</template>

<style scoped lang="scss">
@import "../style/theme.scss";

.Home {
  width: 100%;
  height: v-bind(fullHeight);
  align-items: center;
  .body {
    width: 88%;
    margin-top: 24px;
    margin-bottom: 200px;
    .articles {
      width: 70%;
      // max-height: 2000px;
      opacity: 0.9;
      min-width: 500px;
      flex: 4;
      overflow: auto;
    }
    .sider {
      width: 20%;
      min-width: 150px;
      margin-left: 10px;
      margin-top: 10vh;
      @media screen and (max-width: 1500px) {
        min-width: 350px;
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
      }
    }
  }
  .header {
    width: 88%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    .nav {
      width: 80%;
      height: 660px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
    }
  }

  .music-player-container{
    position: fixed;
    width: 900px;
    height: 280px;
  }

  .personal-content {
    width: 280px;
    height: 500px;
    margin-left: 32px;
  }

}

@keyframes text-scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
