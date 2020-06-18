<template>
  <div
    v-if="articleObject"
    class="Article"
  >
    <article>
      <div class="container__main">
        <template v-for="(block,index) in articleObject.blocks">
          <div
            v-if="block.type === 'header'"
            :key="index"
            class="article__header"
          >
            {{ block.data.text }}
          </div>
          <div
            v-if="block.type === 'paragraph'"
            :key="index"
            class="article__paragraph"
            v-html="block.data.text"
          />
        </template>
        <image-container />
      </div>
    </article>
  </div>
</template>
<script>
import ImageContainer from '@/components/ImageContainer.vue';
import useData from '@/js/use/data';

import {
  ref, onMounted, onUnmounted, watchEffect, computed,
} from 'vue';

export default {
  name: 'Article',
  components: { ImageContainer },
  setup() {
    const articleObject = ref(null);
    const { getData } = useData();
    getData('/data/article.json').then((res) => { articleObject.value = res; });
    return { articleObject };
  },
};
</script>>
<style lang="scss" scoped>
    .Article {
        font-family: Helvetica, Arial, sans-serif;

        .container__main {
            margin-top: 72px;
        }

        .article {
            &__header {
                font-size: 48px;
            }
        }
    }
</style>
