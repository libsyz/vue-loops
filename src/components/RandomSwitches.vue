
<template>
  <div class="toggle__container"
       v-for="toggle in toggles"
       v-bind:key="toggle">
       <toggle/>
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

</style>
