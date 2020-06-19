<template>
  <div class="App">
    <the-header-component />
    <!-- <p>Capacity: {{ capacity }}</p>
    <button @click="increaseCapacity()">
      Increase Capacity
    </button> -->
    <router-view />
  </div>
</template>

<script>
import TheHeaderComponent from '@/components/TheHeader.vue';

export default {
  components: { TheHeaderComponent },
};
</script>
<style scoped lang="scss">
    @import 'main.scss';

    .App {
        max-width: 100vw;
        overflow-x: hidden;
        position: relative;
    }
</style>
