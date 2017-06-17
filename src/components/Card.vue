<template>
  <article class="card">
    <div>Card</div>
    <div class="card__img">{{img}}</div>
    <h2 class="card__species">{{species}}</h2>
    <p class="card__about">{{about}}</p>
  </article>
</template>

<script>

export default {
  name: 'card',
  props: [
    'img',
    'species',
    'about',
  ],
};
</script>

<style lang="scss" scoped>

  .card {

    outline:1px dotted black;

    &__bg {

    }

    &__about {

    }
  }

</style>
