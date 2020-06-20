<template>
  <div
    v-if="images && images.length>0"
    ref="root"
    class="TheGallery"
    @click="handleClick"
  >
    <image-container-component
      v-for="(image, index) of images"
      :key="index"
      :ref="el => { imgs[index] = el }"
      :src="image"
      :class="{'TheGallery__grey':mouseImages.length > 0}"
      @click="currentImageIndex = index"
    />
    <div
      v-if="mouseImages.length > 0"
    >
      <image-container-component
        v-for="(image, index) of mouseImages"
        v-show="root && image.y < root.offsetHeight"
        :key="index + image"
        class="TheGallery__add"
        :src="image.src"
        :style="{top:image.y +'px',left:image.x + 'px' }"
        :height="image.height"
        @click.stop="mouseImages.splice(index,1)"
      />
    </div>
  </div>
</template>

<script>
import {
  ref, watchEffect, computed, onBeforeUpdate, onMounted, onUpdated,
} from 'vue';
import {
  useMouse, useStorage, useDeviceOrientation, useDebounceFn,
} from '@vueuse/core';
import useScrollBottomWindow from '@/js/use/scrollBottomWindow';
import useData from '@/js/use/data';
import ImageContainerComponent from '@/components/ImageContainer.vue';

const useAddImage = () => {
  const { getData } = useData();
  const images = ref([]);
  const fetchImage = () => {
    getData('https://dog.ceo/api/breed/bulldog/french/images/random').then((res) => {
      if (res) {
        images.value.push(res.message);
      }
    });
  };
  const addImage = useDebounceFn((quantity = 1, links) => {
    [...Array(quantity)].map((a, index) => {
      if (!links) {
        fetchImage();
      } else {
        images.value.push(links[index]);
      }
    });
  }, 100);
  addImage(20);
  return { images, addImage };
};

export default {
  components: { ImageContainerComponent },
  setup() {
    const root = ref(null);
    const imgs = ref([]);

    const mouseImages = useStorage('images', []);
    const { alpha } = useDeviceOrientation();
    const currentImageIndex = ref(0);
    const { images, addImage } = useAddImage();
    const { x, y } = useMouse();
    useScrollBottomWindow(addImage, 20);
    const handleClick = () => {
      const offset = -100;
      mouseImages.value.push({
        x: x.value + offset,
        y: y.value + offset,
        src: images.value[currentImageIndex.value],
        get height() { return alpha.value < 100 ? 150 : alpha.value; },
      });
    };
    onMounted(() => {
    });
    const lastImageOffsetTop = computed(() => imgs.value[imgs.value.length - 1].$el.offsetTop);
    onUpdated(() => {
      const offsetBottom = lastImageOffsetTop.value - window.innerHeight;
      if (offsetBottom < 0) {
        addImage(Math.floor(-offsetBottom / 200));
      }
    });
    onBeforeUpdate(() => {
      imgs.value = [];
    });
    return {
      root, imgs, images, currentImageIndex, addImage, mouseImages, x, y, handleClick,
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
            filter: grayscale(100%);
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
