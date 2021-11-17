<template>
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
