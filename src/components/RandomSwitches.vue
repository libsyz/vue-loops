
<template>
  <div class="container">
    <div class="toggle__container"
        v-for="toggle in toggles"
        v-bind:key="toggle">
        <toggle :origin="toggle"/>
    </div>
  </div>
</template>


<script>
import Toggle from "./Toggle.vue";

export default {
  components: {
    'toggle': Toggle
  },
  data: function () {
    return {
      toggles: [1,2,3,4]
    }
  }
}
</script>

<style>
  .container {
    font-family: Arial, sans-serif;
    padding: 20px;
    border: 1px solid #dedede;
    background: #fff;
    border-radius: 4px;
    width: 200px;
    margin: 100px auto 0;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
    text-align: center;
  }
</style>
