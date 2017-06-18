<template>
  <div class="card-board">
    <div class="row">
      <div
        v-for="(animal, key) in $store.getters.enabledAnimals"
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
      <div
        v-show="!$store.getters.enabledAnimals[0]"
        class="card-board__no-animals"
      >
        There's no animals here : (
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
