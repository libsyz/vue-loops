
<template>
  <div class="toggle__container"
       v-for="toggle in toggles"
       v-bind:key="toggle">
       <Toggle>
  </div>

</template>

<script>
import { Toggle } from "./Toggle";
export default {
  data: function () {
    return {
      toggles: [1,2,3,4]
    }
  }
}
</script>

<style>

</style>
