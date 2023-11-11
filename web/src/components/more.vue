<script setup lang="ts">
import { PropType } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  type: {
    type: String as PropType<"article" | "music" | "video">,
    default: 'article'
  }
})

const router = useRouter()

const toMore = () => {
  if (props.type) {
    console.log('type', props.type);
    router.push({
      name: 'More',
      query: {
        type: props.type
      }
    })
  }
}
</script>

<template>
  <div class="more flex row">
    <el-button 
      link
      class="button"
      @click.stop="toMore"> 更多 </el-button>
  </div>
</template>

<style lang="scss" scoped>
@import '../style/flex-style.scss';
@import '../style/theme.scss';

.more {
  width: 100%;
  justify-content: flex-end;
  .button {
    font-size: 24px;
    color: #3fc7f5;
  }
}
</style>