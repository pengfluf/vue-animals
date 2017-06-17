<template>
  <div class="toolbar">
    <button
      v-for="(item, key, i) in $store.getters.families"
      key="key"
      class="button-family"
      :class="item === $store.state.db[key].family
      && $store.state.db[key].enabled ?
        'button-family--enabled' :
        'button-family--disabled'"
      @click="handleClick"
    >
      {{capitalize(item)}}
    </button>
  </div>
</template>

<script>
import capitalize from 'lodash.capitalize';

export default {
  name: 'toolbar',
  methods: {
    handleClick(event) {
      const store = this.$store;
      const text = event.target.innerText.toLowerCase();
      const i = store.getters.families.indexOf(text);
      if (text === store.state.db[i].family && store.state.db[i].enabled) {
        store.commit('disableFamily', i);
      } else {
        store.commit('enableFamily', i);
      }
    },
    capitalize(item) {
      return capitalize(item);
    },
  },
};
</script>

<style lang="scss">
  .toolbar {
    display: flex;
    justify-content: center;
  }

  .button-family {
    margin-right:20px;
    padding:10px 20px;

    outline: none;
    border: none;

    cursor: pointer;


    &:last-child {
      margin-right: 0;
    }

    &--enabled {
      background-color: lightgreen;
    }

    &--disabled {

    }
  }
</style>
