<template>
  <div id="app">
    <router-view/>
    <Footer />
  </div>
</template>
<script>
import Footer from './components/Footer'
export default {
  components: {
    Footer
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin:0 auto;
}

</style>
