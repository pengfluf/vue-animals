<template>
  <transition name="fade">
    <article class="card">
      <a
        class="card_image"
        :href="wikiLink"
      >
        <img
          class="card__img"
          :src="animalImage"
          :alt="species">
      </a>
      <a
        class="card__species"
        :href="wikiLink"
      >{{species}}</a>
      <p class="card__about">{{about}}</p>
    </article>
  </transition>
</template>

<script>
export default {
  name: 'card',
  props: [
    'img',
    'species',
    'about',
    'wikiLink',
  ],
  computed: {
    animalImage() {
      return `static/${this.img}`;
    },
  },
};
</script>

<style lang="scss" scoped>

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: 400px;

    padding: 10px;
    margin-top: 15px;

    border: 1px solid lightgray;

    text-align: center;

    overflow: hidden;

    transition: all 0.2s;

    &:hover {
      transform: scale(1.02);
      box-shadow: 0 20px 40px 0 rgba(38,38,41,0.19);
    }

    @media (min-width: 768px) {
      min-height: 425px;
    }

    &__image {
      display: block;
      width:100%;
      height: 100%;

      margin-left: auto;
      margin-right: auto;

      overflow: hidden;
    }

    &__img {
      max-width: 200px;

      border-radius: 50%;
      border: 1px solid #2c3e50;
      transition: transform 0.3s;

      cursor: pointer;

      &:hover {
        transform: scale(1.03);
      }
    }

    &__species {
      margin-top: 20px;

      font-size: 21px;
      font-weight: 700;

      color: #2c3e50;
      text-decoration: none;
      border-bottom: 1px dashed transparent;

      &:hover {
        border-color: rgba(44, 62, 80, 0.6);
      }
    }

    &__about {
      margin-top: 14px;

      font-size: 16px;
      line-height: 1.5;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.4s ease-out;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
