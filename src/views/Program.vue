<template>
  <div class="Program">
    <div
      class="Program__placeholder"
    />
    <div class="Program__container">
      <article-component
        :id="articleId"
        :key="articleId"
      />
      <the-side-navigation-component />
    </div>
  </div>
</template>

<script>
import ArticleComponent from '@/components/Article.vue';
import TheSideNavigationComponent from '@/components/TheSideNavigation.vue';
import { useRoute, useRouter } from 'vue-router';

import { computed } from 'vue';

export default {
  name: 'Program',
  components: { ArticleComponent, TheSideNavigationComponent },
  setup() {
    const route = useRoute();
    const router = useRouter();
    console.log(router);
    const articleId = computed(() => route.params.articleId || 'article');
    return { articleId };
  },
};
</script>
<style scoped lang="scss">
    .Program {
        &__container {
            display: flex;
            flex-direction: row;
        }

        &__placeholder {
            height: 83px;
        }
    }
</style>
