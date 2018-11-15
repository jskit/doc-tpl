<template>
  <section class="layout-docs">
    <kit-doc :simulator="getSimulatorPath" :config="config">
      <router-view></router-view>
    </kit-doc>
  </section>
</template>

<script>
// import { map } from 'lodash'
import configDocs from '@/config/docs'
function map(arr, key) {
  return arr.map(item => {
    return item[key]
  })
}
const docs = map(configDocs.nav[0].groups[0].list, 'path')
export default {
  name: 'layout-docs',
  components: {
  },

  data() {
    return {
      // simulator: this.getSimulatorPath(),
      config: configDocs,
      pathDir: '',
    }
  },

  computed: {
    getSimulatorPath() {
      const dir = this.$route.path.split('/').pop()
      if (docs.indexOf(dir) > -1) {
        return '/#/demo/'
      }
      return `/#/demo/${dir}`
    },
  },

  watch: {
    '$route'(to, from) {
      // 默认使用 'slide-left' 如果使用的是 back（暂判断不出来），也使用 slide-left
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    },
  },

  methods: {

  },
}
</script>

<style lang="stylus" scope>
body {
  min-width: 1100px;
}
</style>
