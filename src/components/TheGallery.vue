<template>
  <div class="TheGallery">
    <image-container
      v-for="(image,index) of images"
      :key="index"
    />
  </div>
</template>

<script>
import { ref } from 'vue';
import ImageContainer from '@/components/ImageContainer.vue';

export default {
  components: { ImageContainer },
  setup() {
    const images = ref(Array(100).fill(''));
    return { images };
  },
};
</script>
<style scoped lang="scss">
    .TheGallery {
        display: flex;
        flex-flow: row wrap;
    }
</style>
