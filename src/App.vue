<template>
  <h1> Check out these amazing Vue components </h1>
  <p>All these are a bunch of nice components implemented in Vue! </p>
  <!-- Now I need some way of linking to the components -->
  <a href="/Segmented Control"> Segmented Control </a>
  <SegmentedControl v-bind:filters="['price', 'relevance', 'distance']"/>
</template>

<script>
import SegmentedControl from './components/SegmentedControl.vue'

export default {
  name: 'App',
  components: {
    SegmentedControl
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
