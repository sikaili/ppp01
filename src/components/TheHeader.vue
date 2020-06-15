<template>
  <div class="Header">
    <div
      v-for="(item,index) in navigationItems"
      :key="index"
      class="Header__item"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'TheHeader',
  setup() {
    const navigationItems = ref(['PAYSAGE', 'PANORAMA', 'PROGRAM']);
    return { navigationItems };
  },
};
</script>
<style scoped lang="scss">
    .Header {
        position: fixed;
        top: 0;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        width: 100%;

        &__item {
            margin: 24px;
        }
    }
</style>
