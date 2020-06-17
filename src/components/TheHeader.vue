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
        z-index: 1000;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        width: 100%;
        text-transform: uppercase;
        font-family: "Sporting Grotesque_Bold", "AdobeBlank", sans-serif;
        font-size: 28px;
        background-color: rgba(0,0,0, 0.3);

        &__item {
            color: yellow;
            padding: 18px 24px;
            text-decoration: none;

            &:hover {
                background-color: rgba(0,0,0, 0.4);
            }
        }
    }
</style>
