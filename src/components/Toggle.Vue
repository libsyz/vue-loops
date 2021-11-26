

<template>
  <div class="toggle__body"
       :class="{ off: off, on: on }">
    <div class="toggle__button"
         :class="{ off: off, on: on}"
         v-on:click="change()">
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.emitter.on('random-toggle', ({sender})   => {
      if (sender != this.originator && (Math.random() > 0.5)) {
        this.toggleSwitch();
      }
    })
  },
  name: 'toggle',
  props: ['origin'],
  methods: {
    change() {
      this.toggleSwitch();
      this.emitter.emit(
            'random-toggle',
            {
              sender: this.originator
            }
          );
    },
    toggleSwitch(){
      this.off = !this.off;
      this.on = !this.on;
    }
  },
  data: function () {
    return {
      off: true,
      on: false,
      originator: this.origin
    }
  }
}
</script>

<style>
  .toggle__body {
    width: 48px;
    height: 16px;
    border-radius: 10px;
    margin-bottom: 10px;
    position: relative;

  }

  .toggle__body.on {
    background-color: rgb(151, 225, 140);
    transition: left 0.3s ease;
  }

  .toggle__body.off {
    background-color: rgb(208, 208, 208);
    transition: left 0.3s ease;
  }

  .toggle__button {
    cursor: pointer;
    background-color: #fff;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: solid 0.5px #000;
    position:absolute;
    background: linear-gradient(to left, #bdc3c7, #2c3e50); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .toggle__button.on {
    left: 32px;
    transition: left 0.3s ease;
  }

  .toggle__button.off {
    left: 0px;
    transition: left 0.3s ease;
  }

</style>
