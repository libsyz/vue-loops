<template>
  <input v-model="formInput"
         type="text"
         placeholder="enter tab index">
  <button @click="selectForm()"> Change Tab </button>
  <div class="buttons">
    <div @click="setSelected('positive')"
         :class="{ active: active === 'positive' }"
         class="btn">positive
    </div >
    <div @click="setSelected('negative')"
         :class="{ active: active === 'negative' }"
         class="btn">negative
    </div>

    <div @click="setSelected('neutral')"
         :class="{ active: active === 'neutral' }"
         class="btn">neutral</div>
  </div>
  <div class="content">
    <p v-for="item in selected"
       :key="item">
       {{ item }}
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.setSelected('positive');
  },
  name: 'ProgressNavigation',
  methods: {
    setSelected(value) {
      this.active = value;
      this.selected = this.$data[value]
    },
    selectForm() {
      if ( this.formInput === '1' )
      {
        this.setSelected('positive')
      }
      else if ( this.formInput === '0' )
      {
        this.setSelected('negative')
      }
      else if ( this.formInput === '2' )
      {
        this.setSelected('neutral')
      }
      else
      {
        this.$data.selected = ['tab does not exist'];
      }
    }
  },
  data: function() {
    return {
      negative: ['oh so bad', 'really bad', 'hate this service'],
      positive: ['oh so good', 'really good', 'love this service'],
      neutral: ['oh so oh', 'really...you know really', 'nothing to say'],
      selected: null,
      formInput: '',
      active: '',
    }
  }
}
</script>

<style>
  .active {
    font-weight: bold;
  }
  .buttons {
    margin-top: 15px;
    text-transform: uppercase;
    cursor: pointer;
  }
  .btn {
    font-size: 14px;
    display: inline;
    margin-right: 10px;

  }

</style>
