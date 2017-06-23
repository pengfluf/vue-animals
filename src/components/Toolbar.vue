<template>
  <div class="toolbar">
    <button
      v-for="(item, i, key) in $store.getters.families"
      :key="key"
      class="button-family"
      :class="buttonState(item, i)"
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
    buttonState(item, i) {
      const classes = [];
      const db = this.$store.state.db;

      if (item === db[i].family && db[i].enabled) {
        classes.push('button-family--enabled');
      } else {
        classes.push('button-family--disabled');
      }

      switch (item) {
        case 'penguin':
          classes.push('icon-penguin');
          break;
        case 'armadillo':
          classes.push('icon-armadillo');
          break;
        case 'mackerel':
          classes.push('icon-mackerel');
          break;
        default:
          classes.push('');
      }

      return classes;
    },
    capitalize(item) {
      return capitalize(item);
    },
  },
};
</script>

<style lang="scss" scoped>
  .toolbar {
    display: flex;
    justify-content: center;

    position: fixed;
    top: 7%;
    right: 0;
    z-index: 5;

    overflow: hidden;

    @media (max-width: 575px) {
      flex-direction: column;
    }

    @media (min-width: 576px) {
      position: static;

      max-width: 90%;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .button-family {
    margin-right: 20px;
    padding: 10px 20px;

    outline: none;
    border: none;
    border-radius: 5px;

    font-size: 18px;

    cursor: pointer;

    transition: all 0.4s;

    @media (max-width: 575px) {
      margin-top: 10px;
      margin-right: 0;
      padding: 10px 0;

      border-top-right-radius: 0;
      border-bottom-right-radius: 0;

      color: transparent;

      &:first-child {
        margin-top: 0;
      }
    }

    &:last-child {
      margin-right: 0;
    }

    &--enabled {
      position: relative;
      background-color: #ffc107;

      &:hover {
        background-color: #ffa000;
      }

      &::after {
        position: absolute;
        right: 0;
        bottom: 0;

        content: 'enabled';

        font-size: 8px;
        font-weight: 700;

        color: #fafafa;

        text-transform: uppercase;

        @media (max-width: 575px) {
          font-size: 9px;
          left: 0;
          color: transparent;
        }
      }
    }

    &--disabled {
      position:relative;

      background-color: #e0e0e0;

      &:hover {
        background-color: #bdbdbd;
      }

      &::after {
        position: absolute;
        right: 0;
        bottom: 0;

        content: 'disabled';

        font-size: 8px;
        font-weight: 700;

        color: #616161;

        text-transform: uppercase;

        @media (max-width: 575px) {
          font-size: 9px;
          left: 0;
          color: transparent;
        }
      }
    }
  }

  .icon-penguin,
  .icon-armadillo,
  .icon-mackerel {
    background-repeat: no-repeat;
    background-position: center;
  }

  .icon-penguin {
    @media (max-width: 575px) {
      background-image: url('../../static/icon-penguin.svg');
    }
  }

  .icon-armadillo {
    @media (max-width: 575px) {
      background-image: url('../../static/icon-armadillo.svg');
    }
  }

  .icon-mackerel {
    @media (max-width: 575px) {
      background-image: url('../../static/icon-mackerel.svg');
    }
  }
</style>
