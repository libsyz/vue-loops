<template>
  <div class="container-options">
    <ul>
      <li> 1 - Choose Title </li>
      <li> 2 - Choose Description </li>
      <li> 3 - Confirm Data </li>
    </ul>
    <div class="box"
         :class="{ show: title && !description && !confirmed }"
      Choose Title
      <button @click="submitTitle()"> Submit Title </button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      title: false,
      description: false,
      confirmed: false
    }
  },
  methods: {
    submitTitle() {
      this.title = true;
    }
  }
}
</script>

<style>
  .container-options {
    display: flex;
  }

  .box {
    display: none;
  }

  .show {
    display: block;
  }
</style>
