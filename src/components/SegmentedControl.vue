<template>
  <div class="container">
    <div class="controls"
         :class="{ hidden: windowWidth < 600 }">
      <div v-on:click="activeThis(item)"
           class="segmented-control__button"
           :class="{ segmentedControl__button__active: activeFilter == item }"
           :key="item"
           v-for="item in searchFilters">
        {{ `Sort by ${item}` }}
      </div>
    </div>
      <form action=""
            :class="{ hidden: windowWidth > 600 }">
        <select name="selection"
                class="segmented-control__select"
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
    this.windowWidth = window.innerWidth;
    window.addEventListener('resize', this.showOrHide);
  },
  name: 'SegmentedControl',
  methods: {
    activeThis(item) {
      this.activeFilter = item;
    },
    showOrHide(e) {
      this.windowWidth = e.srcElement.innerWidth;
      console.log(this.windowWidth)
    }
  },
  data: function() {
    return {
      searchFilters: ['location', 'price', 'distance'],
      activeFilter: 'location',
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
  body {
      background: #74b9ff;
      font-size: 14px;
  }

  .container {
      font-family: Arial, sans-serif;
      padding: 20px;
      border: 1px solid #dedede;
      background: #fff;
      border-radius: 4px;
      width: 400px;
      margin: 100px auto 0;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  }

  .segmented-control__button {
      border: 2px solid #5896ff;
      border-left: 0;
      padding: 10px;
      position: relative;
      cursor: pointer;
      background: #fff;
      display: inline;
  }

  .segmented-control__button:hover {
      background: rgba(88, 150, 225, 0.2)
  }

  .segmented-control__button:first-child {
      border-left: 2px solid #5896ff;
      border-radius: 4px 0 0 4px;
  }

  .segmented-control__button:last-child {
      border-radius: 0 4px 4px 0;
  }

  .segmentedControl__button__active,
  .segmentedControl__button__active:hover {
      background: #5896ff;
      color: #fff;
  }

  .segmented-control__select {
      width: 100%;
      border: 2px solid #5896ff;
      background: transparent;
      height: 36px;
  }

  .segmented-control__button:focus,
  .segmented-control__select:focus {
      outline: none;
      box-shadow: 0 0 0 2px rgba(88, 150, 225, 0.4);
      z-index: 2;
  }

  .hidden {
    display: none;
  }
</style>
