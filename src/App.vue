<template>
  <div id="app">
    <kit-doc :simulator="getSimulatorPath" :config="config">
      <router-view></router-view>
    </kit-doc>
  </div>
</template>

<script>
import configDocs from './config/docs'
// import KitDoc from './KitDoc'
function map(arr, key) {
  return arr.map(item => {
    return item[key]
  })
}
const docs = map(configDocs.nav[0].groups[0].list, 'path')
export default {
  name: 'app',

  components: {
    // [KitDoc.name]: KitDoc,
  },

  data() {
    return {
      // simulator: '',
      config: configDocs,
      pathDir: '',
    }
  },

  computed: {
    getSimulatorPath() {
      console.log(this)
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
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.slide-left-enter,
.slide-right-leave-active{
  opacity: 0;
  transform: translate(30px, 0);
}

.slide-left-leave-active,
.slide-right-enter{
  opacity: 0;
  transform: translate(-30px, 0);
}
</style>
