<template>
  <div class="row justify-content-center">

    <div class="col-12">
      <h2 class="category__title">{{title}}</h2>
    </div>

    <div
      class="col-12 col-md-6 col-lg-4"
      v-for="(animal, i) in $store.getters.categories[categIndex(title)]"
    >
      <card
        :img="animal.img"
        :species="animal.species"
        :about="animal.about"
        :wikiLink="animal.wikiLink"
      />
    </div>

  </div>
</template>

<script>
import Card from './Card';

export default {
  name: 'category',
  components: {
    Card,
  },
  props: [
    'title',
  ],
  methods: {
    categIndex(title) {
      return this.$store.getters.families.indexOf(title.toLowerCase());
    },
  },
};
</script>

<style lang="scss" scoped>

.category__title {
  margin-top: 30px;
}

</style>
