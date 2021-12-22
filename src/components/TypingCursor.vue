<template>
  <h3> We can help you with <span> {{ currentWord }}  </span> <span class="cursor"> | </span>  </h3>
</template>

<script>
export default {
  mounted() {
      this.typeWord(0);

  },
  data: function() {
    return {
      currentWord: '',
      words: ['testing ', 'development ', 'production ']
    }
  },
  methods: {

    typeWord(wordIndex) {
        let letterCounter = 0;
        setInterval(() => {
          let word = this.words[wordIndex];

          this.currentWord = word.substring(0, letterCounter);
          letterCounter++

          if ( letterCounter === word.length ) {
            wordIndex++
            letterCounter = 0;
          }

          if ( wordIndex == this.words.length ) {
            wordIndex = 0
          }

        }, 200);
      }
    }
  }
</script>

<style>

  span {
    margin: 0;
  }

  .cursor {
    position: relative;
    right: 6px;
    animation-duration: 500ms;
    animation-name: fade-cursor-1, fade-cursor-2;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  @keyframes fade-cursor-1 {
      from {
          opacity: 0;
      }

      50% {
          opacity: 1;
      }

      to {
          opacity: 0;
      }
  }
/*
  @keyframes fade-bg-2 {
      from {
          opacity: 0;
          background-image: url('http://i.imgur.com/wL4RT1w.jpg');
      }

      50% {
          opacity: 1;
          background-image: url('http://i.imgur.com/wL4RT1w.jpg');
      }

      to {
          opacity: 0;
          background-image: url('http://i.imgur.com/wL4RT1w.jpg');
      }
  } */

</style>
