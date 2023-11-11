<script lang="ts" setup>
defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div v-show="loading" class="loading-container flex row">
    <div class="no-data-comp flex column">
      <img src="../../../assets/images/loading.png" alt="Loading" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../style/flex-style.scss";
@import "../../../style/theme.scss";
.loading-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  background-color: rgba($color: #ccc, $alpha: 0.6);
  .no-data-comp {
    border: 5px solid $theme-color;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    background-color: #999;
    animation: scale-animate 1s linear infinite;
    img {
      width: 20vh;
      height: 18vh;
      margin-top: 1vh;
    }
  }
}

@keyframes scale-animate {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
