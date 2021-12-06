<template>
  <div class="container-options">
    <ul>
      <li>
          <span :class="{ active: title }">1</span>
          - Choose Title

      </li>
      <li>
          <span :class="{ active: title && description }">2</span>
          - Choose Description

      </li>
      <li>
          <span :class="{ active: title && description && confirmed }">3</span>
          - Confirm Data
      </li>
    </ul>
    <div class="box box-title"
         :class="{ show: title && !description && !confirmed }">
      Choose Title
       <input v-model="titleInput" type="text" placeholder="your title">
      <button @click="submitTitle()"> Submit Title </button>
    </div>
    <div class="box box-description"
         :class="{ show: title && description && !confirmed }">
      Enter Description
       <input v-model="descriptionInput" type="text" placeholder="your description">
      <button @click="cancelDescription()"> Back </button>
      <button @click="submitDescription()"> Submit Description </button>
    </div>
    <div class="box box-confirm"
         :class="{ show: title && description && confirmed }">
      <button @click="cancelConfirm()"> Back </button>
      <button @click="submitConfirm()"> Confirm </button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      titleInput: '',
      descriptionInput: '',
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
      alert(`title: ${this.titleInput},. description: ${this.descriptionInput}`);
    },
    cancelDescription() {
      this.description = false;
    },
    cancelConfirm() {
      this.confirmed = false;
    }


  }
}
</script>

<style>
  .container-options {
    display: flex;
  }

  span {
    line-height: 25px;
  }

  .active {
    display: inline-block;
    width: 25px;
    height: 25px;
    background-color: darkblue;
    border-radius: 50%;
    color: #fff;
    transition: background-color 0.15s ease-in-out;
  }


  .box {
    display: none;
  }

  .show {
    display: block;
  }
</style>
