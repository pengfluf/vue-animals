<template>
  <div
    class="row justify-content-center"
  >
    <div class="col-12">
      <h2 class="category__title">{{title}}</h2>
    </div>

    <div
      class="col-12 col-md-6 col-lg-4"
      v-for="(animal, i) in $store.getters.categories[categIndex(title)]"
      :key="`${animal}${i}`"
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
      const families = this.$store.getters.families;
      return families.indexOf(title.toLowerCase().slice(0, -1));
    },
  },
};
</script>

<style lang="scss" scoped>

.category__title {
  margin-top: 50px;

  font-size: 27px;
  text-align: center;
}

</style>
