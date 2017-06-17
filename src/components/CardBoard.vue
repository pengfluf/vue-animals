<template>
  <div class="card-board">
    <card
    v-for="(animal, key) in this.$store.getters.enabledAnimals"
    key="key"
    :img="animal.img"
    :species="animal.species"
    :about="animal.about"
    />
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

</style>
