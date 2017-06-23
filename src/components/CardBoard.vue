<template>
  <div class="card-board">
    <category
      v-for="(family, i) in $store.getters.families"
      :key="`${family}${i}`"
      v-if="showCategory(i)"
      :title="capitalize(family) + 's'"
    />
    <p
      v-show="noAnimals()"
      class="card-board__no-animals"
    >
      There's no animals : (</p>
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
    showCategory(i) {
      return this.$store.state.db[i].family ===
      this.$store.getters.families[i] &&
      this.$store.state.db[i].enabled;
    },
    noAnimals() {
      const arr = this.$store.state.db.filter(item => item.enabled);
      return !arr[0];
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
