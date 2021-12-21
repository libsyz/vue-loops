<template>
  <h3> We can help you with <span> {{ currentWord }} </span> </h3>
</template>

<script>
export default {
  mounted() {
    ['testing', 'development'].forEach((word) => {
      let counter = 0;
      let int = setInterval(() => {
          if (counter === word.length) {
            clearInterval(int);
          } else {
            this.currentWord = word.substring(0, counter);
          }
      }, 2000);
    })
  },
  data: function() {
    return {
      currentWord: 'testing',
      words: ['testing', 'development', 'production']
    }
  },
  methods: {

  }

}
</script>

<style>

</style>
