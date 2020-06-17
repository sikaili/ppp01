<template>
  <div class="TheGallery">
    <image-container
      v-for="(image, index) of images"
      :key="index"
      :src="image"
    />
    <div
      class="TheGallery__addImage"
      @click="addImage(linkToAdd)"
    >
      <!-- <input v-model="linkToAdd"> -->
      +
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import ImageContainer from '@/components/ImageContainer.vue';

const useAddImage = () => {
  const images = ref([]);
  const fetchImage = async (index) => {
    const response = await fetch('https://dog.ceo/api/breed/bulldog/french/images/random');
    const json = await response.json();
    images.value[index] = json.message;
  };
  [...Array(30)].map((a, i) => fetchImage(i));

  const addImage = (link) => {
    if (!link) {
      fetchImage(images.value.length);
      return;
    }
    images.value.push(link);
  };
  return { images, addImage };
};

export default {
  components: { ImageContainer },
  setup() {
    const { images, addImage } = useAddImage();
    return { images, addImage };
  },
  data() {
    return {
      linkToAdd: '',
    };
  },
};
</script>
<style scoped lang="scss">
    .TheGallery {
        display: flex;
        flex-wrap: wrap;
        width: calc(100% + 500px);

        &__addImage {
            width: 200px;
            height: 310px;
            border: 1px solid blue;
            font-size: 48px;
            background-color: rgba(100,100,200);
        }
    }
</style>
