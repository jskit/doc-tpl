<template>
  <div class="kit-doc-container kit-doc-row" :class="[{ 'kit-doc-container--with-simulator': hasSimulator }]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'kit-doc-container',

  props: {
    hasSimulator: Boolean,
  },
}
</script>

<style lang="stylus">
@import '../style/var';

.kit-doc-container {
  overflow: hidden;
  box-sizing: border-box;
  background-color: #fff;
  // margin: $kit-doc-padding $kit-doc-padding 50px $kit-doc-padding;
  padding-left: $kit-doc-nav-width;

  &--with-simulator {
    padding-right: $kit-doc-simulator-width + $kit-doc-padding;
    // padding-right: calc($kit-doc-simulator-width + $kit-doc-padding);

    @media (max-width: 1300px) {
      padding-right: $kit-doc-simulator-small-width + $kit-doc-padding;
      // padding-right: calc($van-doc-simulator-small-width + $van-doc-padding);
    }
  }
}
</style>
