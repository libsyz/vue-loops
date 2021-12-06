<template>
  <div class="container-options">
    <ul>
      <li> 1 - Choose Title </li>
      <li> 2 - Choose Description </li>
      <li> 3 - Confirm Data </li>
    </ul>
    <div class="box box-title"
         :class="{ show: title && !description && !confirmed }">
      Choose Title
      <button @click="submitTitle()"> Submit Title </button>
    </div>
    <div class="box box-description"
         :class="{ show: title && description && !confirmed }">
      Enter Description
      <button @click="submitDescription()"> Submit Title </button>
    </div>
    <div class="box box-confirm"
         :class="{ show: title && description && confirmed }">
      <button @click="submitConfirm()"> Confirm </button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      title: true,
      description: false,
      confirmed: false
    }
  },
  methods: {
    submitTitle() {
      this.description = true;
    },

    submitDescription() {
      this.confirmed = true;
    },
    submitConfirm(){
      alert('you\'re done!');
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
