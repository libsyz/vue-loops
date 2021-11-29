

<template>
  <div class="toggle__wrapper">
    <p :class="{ text__on: on }"
       class="toggle__desc"> This is not so useful  </p>
    <div class="toggle__body"
        :class="{ off: off, on: on }">
      <div class="toggle__button"
          :class="{ off: off, on: on}"
          v-on:click="change()">
      </div>
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
  .toggle__wrapper {
    display: flex;
    align-items: middle;
  }

  .toggle__desc {
    margin-top: 0px;
    margin-right: 1em;
  }

  .text__on {
    color: rgb(107, 161, 99);
  }

  .toggle__body {
    width: 40px;
    height: 16px;
    border-radius: 10px;
    margin-bottom: 10px;
    position: relative;
    transition: color 0.3 ease;
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
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fff;
    border: 1px solid #dedede;
    box-sizing: border-box;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    position:absolute;
  }

  .toggle__button.on {
    left: 24px;
    transition: left 0.3s ease;
  }

  .toggle__button.off {
    left: 0px;
    transition: left 0.3s ease;
  }

</style>
