<template>
  <div class="App">
    <router-view name="header" />
    <!-- <p>Capacity: {{ capacity }}</p>
    <button @click="increaseCapacity()">
      Increase Capacity
    </button> -->
    <router-view />
  </div>
</template>

<script>
export default {
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
