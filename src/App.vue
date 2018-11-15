<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
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
