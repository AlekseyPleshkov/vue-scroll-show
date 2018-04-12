<template lang='pug'>
div#app
  h2 Scroll down
  div.empty
  p.show__text(v-scroll-show='{active: "active active2"}') Change color after scroll ^_^
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang='scss'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.empty {
  height: 200vh;
}

.show__text {
  color: black;
  transition: color 1s ease;

  &.active {
    color: red;
  }
}
</style>
