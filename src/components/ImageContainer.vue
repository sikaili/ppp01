<template>
  <div class="ImageContainer">
    <img
      class="ImageContainer__image"
      :src="src"
    >
  </div>
</template>

<script>
export default {
  name: 'ImageContainer',
  props: {
    src: {
      type: String,
      default: '',
    },
  },
};
</script>
<style scoped lang="scss">
    .ImageContainer {
        height: 310px;
        min-width: 200px;
        width: auto;
        background: white;
        border: 1px solid red;
        object-fit: contain;
        overflow: hidden;

        img {
            display: block;
            width: 100%;
            text-indent: 100%;
            white-space: nowrap;
            overflow: hidden;
        }
    }
</style>
