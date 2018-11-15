<template>
  <section class="layout-demo">
    <transition :name="transition">
      <router-view class="page-demo"></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'layout-demo',
  data() {
    return {
      transition: 'slide-left',
    }
  },
  // watch $route 决定使用哪种过渡
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    },
  },
}
</script>

<style lang="stylus">
body {
  min-width: initial;
  width: 100%;
  overflow-y: hidden;
}
.layout-demo,
.page-demo {
  height: 100%;
}
</style>
