
<template>
  <div class="toggle__container"
       v-for="toggle in toggles"
       v-bind:key="toggle">
        <toggle> </toggle>
  </div>

</template>


<script>

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
