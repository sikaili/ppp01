<template>
  <div
    ref="root"
    class="TheGallery"
    @click="handleClick"
  >
    <router-link
      v-for="(item, index) of itemsToShow"
      :key="index"
      :to="{ name: 'program', params: { articleId: item.articleId }}"
    >
      <image-container-component
        :ref="el => { imgRefs[index] = el }"
        :src="item.src"
        @click="currentImageIndex = index"
      />
    </router-link>
  </div>
</template>

<script>
import {
  ref, computed, onBeforeUpdate, onUpdated,
} from 'vue';
import {
  useMouse, useDebounceFn,
} from '@vueuse/core';
import useScrollBottomWindow from '@/js/use/scrollBottomWindow';
import useData from '@/js/use/data';
import ImageContainerComponent from '@/components/ImageContainer.vue';

const useAddImage = () => {
  const { getData } = useData();
  const items = ref([]);
  getData('/data/home.json').then((res) => {
    res.forEach((obj) => {
      obj.show = false;
    });
    items.value = res;
  });
  return { items };
};

export default {
  components: { ImageContainerComponent },
  setup() {
    const root = ref(null);
    const imgRefs = ref([]);
    const currentImageIndex = ref(0);
    const currentHoverIndex = ref(0);
    const { items } = useAddImage();
    const { x, y } = useMouse();
    const showImageQuantity = ref(5);
    const handleClick = () => {

    };
    const lastImageOffsetTop = computed(() => {
      if (imgRefs.value.length > 0) {
        return imgRefs.value[imgRefs.value.length - 1].$el.offsetTop;
      }
      return 0;
    });

    const addImage = useDebounceFn((step = 1) => {
      showImageQuantity.value += step;
    }, 30);
    useScrollBottomWindow(addImage, 15);
    onUpdated(() => {
      const offsetBottom = lastImageOffsetTop.value - window.innerHeight;
      if (offsetBottom < 0) {
        addImage();
      }
    });
    onBeforeUpdate(() => {
      imgRefs.value = [];
    });

    const itemsToShow = computed(() => items.value.slice(0, showImageQuantity.value));
    console.log(itemsToShow);
    return {
      root, imgRefs, itemsToShow, currentImageIndex, currentHoverIndex, x, y, handleClick,
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
