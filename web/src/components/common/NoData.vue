<template>
  <div class="no-data-comp flex column">
    <img src="../../assets/images/no-data.png" alt="NO DATA!">
    <span v-if="msg" style="color: #3fc7f5">{{ msg }}</span>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  msg: {
    type: String,
    default: "无 数 据"
  }
})
</script>

<style lang="scss" scoped>
@import "../../style/flex-style.scss";
@import "../../style/theme.scss";
.no-data-comp {
  width: 98%;
  height: 360px;
  margin: auto;
  margin-top: 2vh;
  font-size: 2vh;
  border: 3px solid $theme-color;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  img {
    width: 10vh;
    height: 10vh;
    margin-top: 1vh;
  }
}
</style>