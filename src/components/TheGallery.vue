<template>
  <div
    class="TheGallery"
    @click="handleClick"
  >
    <image-container
      v-for="(image, index) of images"
      :key="index"
      :src="image"
      :class="{'TheGallery__grey':mouseImages.length > 0}"
      @click="currentImageIndex = index"
    />
    <div
      v-if="mouseImages.length > 0"
    >
      <image-container
        v-for="(image, index) of mouseImages"
        :key="index + image"
        class="TheGallery__add"
        :src="image.src"
        :style="{top:image.y +'px',left:image.x + 'px' }"
        @click.stop="mouseImages.splice(index,1)"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { useMouse, useStorage, useDebounceFn } from '@vueuse/core';
import ImageContainer from '@/components/ImageContainer.vue';

const useAddImage = () => {
  const images = ref([]);
  const fetchImage = async () => {
    const response = await fetch('https://dog.ceo/api/breed/bulldog/french/images/random');
    const json = await response.json();
    images.value.push(json.message);
  };
  const addImage = (quantity = 1, links) => {
    [...Array(quantity)].map((a, index) => {
      if (!links) {
        fetchImage();
      } else {
        images.value.push(links[index]);
      }
    });
  };
  addImage(20);

  return { images, addImage };
};

export default {
  components: { ImageContainer },
  // setup(props) {

  setup() {
    const mouseImages = useStorage('images', []);
    const currentImageIndex = ref(0);
    const { images, addImage } = useAddImage();
    const { x, y } = useMouse();
    onMounted(() => {
      const onScroll = useDebounceFn(() => {
        const bottomOfWindow = document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight - 30;
        if (bottomOfWindow) {
          addImage(20);
        }
      }, 200);
      window.addEventListener('scroll', onScroll);
    });
    onUnmounted(() => {
    });
    const handleClick = () => {
      const offset = -100;
      mouseImages.value.push({ x: x.value + offset, y: y.value + offset, src: images.value[currentImageIndex.value] });
    };
    return {
      images, currentImageIndex, addImage, mouseImages, x, y, handleClick,
    };
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

        &__grey {
            filter: grayscale(100%) !important;
        }

        &__addImage {
            width: 200px;
            height: 310px;
            border: 1px solid blue;
            font-size: 48px;
            background-color: rgba(100,100,200);
        }

        &__add {
            z-index: 10;
            position: absolute;
        }
    }
</style>
