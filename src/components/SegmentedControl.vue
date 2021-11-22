<template>
  <div class="root">
    <h2> This is segmented Control! </h2>
      <div v-on:click="activeThis(item)"
           class="control"
           :class="{ active : activeFilter == item }"
           :key="item"
           v-for="item in searchFilters">
        {{ `Sort by ${item}` }}
      </div>
      <form action="">
        <select name="segmented"
                class="selection"
                v-model="activeFilter"
                id="">
          <option v-for="item in searchFilters"
                  :key="item"
                  :value="item">
            {{ `Sort by ${item}` }}
          </option>
        </select>
      </form>
  </div>
</template>

<script>
export default {
  created() {
    window.addEventListener('resize', this.showOrHide);
  },
  name: 'SegmentedControl',
  props: {
    filters: Array
  },
  methods: {
    activeThis(item) {
      this.activeFilter = item;
    },
    showOrHide(e) {
      console.log(e);
    }
  },
  data: function() {
    return {
      searchFilters: this.filters,
      activeFilter: this.filters[0],
      windowWidth: 0
    }
  },
  computed: {
    upcase(str) {
      return str.toUpperCase();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .active {
    color: #fff;
    background-color: blue !important;
  }

  .control {
    padding: 10px 10px;
    background-color: #fff;
    display: inline;
  }

  .control:hover {
    cursor: pointer;
  }

  .selection {
    width: 100%;
  }
</style>
