<template>
  <div class="TheSideNavigation">
    <router-link
      v-for="(item, index) in navigationItems"
      :key="index"
      :to="{ name: page, params: { articleId: item }}"
      class="TheSideNavigation__item"
    >
      {{ item }}
    </router-link>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'TheSideNavigation',
  props: {
    page: {
      type: String,
      default: 'program',
    },
  },
  setup() {
    const navigationItems = ref(['aaa', 'article', 'ccc']);
    return { navigationItems };
  },
};
</script>
<style scoped lang="scss">
    .TheSideNavigation {
        position: fixed;
        z-index: 1000;
        display: flex;
        flex-direction: column;
        max-width: 30vw;
        right: 0;
        top: 83px;
        justify-content: space-between;
        text-transform: uppercase;
        background-color: rgba(0,0,0, 0.3);

        &__item {
            color: yellow;
            font-family: "Sporting Grotesque_Bold", "AdobeBlank", sans-serif;
            font-size: 28px;
            padding: 18px 24px;
            text-decoration: none;

            &:hover {
                background-color: rgba(0,0,0, 0.4);
            }
        }

        @media(max-width: 768px) {
            &__item {
                padding: 10px 5px;
                font-size: calc(100vw / 25);
            }
        }
    }
</style>
