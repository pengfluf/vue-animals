<template>
  <div class="card-board">
    <category
      v-for="family in $store.getters.families"
      :title="capitalize(family)"
    />
  </div>
</template>

<script>
import capitalize from 'lodash.capitalize';

import Category from './Category';

export default {
  name: 'card-board',
  components: {
    Category,
  },
  methods: {
    capitalize(item) {
      return capitalize(item);
    },
  },
};
</script>

<style lang="scss" scoped>
  .card-board {
    padding-bottom: 40px;

    &__no-animals {
      width: 100%;

      position: absolute;
      top: 42vh;

      font-size: 25px;
      text-align: center;
    }
  }
</style>
