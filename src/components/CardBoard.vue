<template>
  <div class="card-board">
    <div class="row">
      <div
        v-for="(animal, key) in this.$store.getters.enabledAnimals"
        class="col-12 col-md-6 col-lg-4"
      >
        <card
          key="key"
          :img="animal.img"
          :species="animal.species"
          :about="animal.about"
          :wikiLink="animal.wikiLink"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from './Card';

export default {
  name: 'card-board',
  components: {
    Card,
  },
};
</script>

<style lang="scss">
  .card-board {
    padding-bottom:40px;
  }
</style>
