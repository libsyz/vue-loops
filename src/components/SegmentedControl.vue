<template>
  <div class="root">
    <h2> This is segmented Control! </h2>
      <p :key="item" v-for="item in searchFilters">
        {{ item }}
      </p>

  </div>
</template>

<script>
export default {
  name: 'SegmentedControl',
  props: {
    filters: Array
  },
  data: function() {
    return { searchFilters: this.filters };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
