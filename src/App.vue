<template>
  <div class="App">
    <the-header />
    <!-- <p>Capacity: {{ capacity }}</p>
    <button @click="increaseCapacity()">
      Increase Capacity
    </button> -->
    <router-view />
  </div>
</template>

<script>
import { ref } from 'vue';
import TheHeader from '@/components/TheHeader.vue';

export default {
  components: { TheHeader },
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
    .App {
        max-width: 100vw;
        overflow: hidden;
    }
</style>
