<template>
  <div class="kit-doc-block"><slot></slot></div>
</template>

<script>
export default {
  name: "kit-doc-block"
};
</script>

<style lang="stylus">
@import '../style/var';

.kit-doc-block {
  display: flex;
  margin-bottom: 20px;

  .highlight {
    flex: 1;
    box-sizing: border-box;

    pre {
      word-break: break-all;
    }
  }
}
</style>
