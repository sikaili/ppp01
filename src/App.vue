<template>
  <div>
    <the-header />
    <!-- <p>Capacity: {{ capacity }}</p>
    <button @click="increaseCapacity()">
      Increase Capacity
    </button> -->
    <the-gallery />
  </div>
</template>

<script>
import { ref } from 'vue';
import TheHeader from '@/components/TheHeader.vue';
import TheGallery from '@/components/TheGallery.vue';

export default {
  components: { TheHeader, TheGallery },
  setup() {
    const capacity = ref(3);
    function increaseCapacity() {
      capacity.value += 1;
    }
    return { capacity, increaseCapacity };
  },
};
</script>
<style scoped lang="scss">

</style>
