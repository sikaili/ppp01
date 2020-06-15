<template>
  <div class="TheHeader">
    <router-link
      v-for="(item,index) in navigationItems"
      :key="index"
      to="/"
      class="TheHeader__item"
    >
      {{ item }}
    </router-link>
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
    .TheHeader {
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
