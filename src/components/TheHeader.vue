<template>
  <div class="TheHeader">
    <router-link
      v-for="(item,index) in navigationItems"
      :key="index"
      :to="'/' + item"
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
    const navigationItems = ref(['paysage', 'panorama', 'program']);
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
        text-transform: uppercase;

        &__item {
            margin: 24px;
        }
    }
</style>
