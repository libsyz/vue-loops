<template>
  <div class="container">
      <input v-model="formInput"
            class="form-input"
            type="text"
            placeholder="Enter tab index">
      <button class="btn--select-tab" @click="selectForm()"> Change Tab </button>
      <div class="buttons">
        <div v-for="(_, reviewType, id ) in reviews"
             v-bind:key="id"
             @click="setSelected(reviewType)"
             :class="{ active: active === reviewType }"
             class="btn--tab">
             {{ reviewType }}
        </div>
      </div>
      <div class="content">
        <p class="content__review"
          v-for="item in selected"
          :key="item">
          {{ item }}
        </p>
      </div>
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
      this.selected = this.$data['reviews'][value]
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
      reviews: {
        positive: ['oh so good', 'really good', 'love this service'],
        negative: ['oh so bad', 'really bad', 'hate this service'],
        neutral: ['oh so oh', 'really...you know really', 'nothing to say']
      },
      selected: null,
      formInput: '',
      active: '',
    }
  }
}
</script>

<style>
  .container  {
    margin: 100px auto 0;
  }

  .form-input {
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: solid 2px #b5b5b5;
    padding: 10px
  }

  .form-input:focus {
    outline: none;
    border-bottom-color: #000;
    transition: 0.20s ease;
  }

  .content__review {
    text-align: left;
  }
  .btn--tab.active {
    font-weight: bold;
    transition: .15s ease-in;
    color: #000;
    opacity: 1;
  }
  .buttons {
    margin-top: 15px;
    text-transform: uppercase;
    cursor: pointer;
  }

  .btn--select-tab {
    border: none;
    font-size: 14px;
  }
  .btn--tab {
    font-size: 14px;
    display: inline;
    margin-right: 10px;
    opacity: .4;
  }

</style>
