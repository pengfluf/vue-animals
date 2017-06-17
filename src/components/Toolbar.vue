<template>
  <div class="toolbar">
    <button
      v-for="family in this.$store.getters.families"
      @click="handleClick"
    >
      {{family}}
    </button>
  </div>
</template>

<script>
export default {
  name: 'toolbar',
  methods: {
    handleClick(event) {
      const store = this.$store;
      const text = event.target.innerText;
      const i = store.getters.families.indexOf(text);
      if (text === store.state.db[i].family && store.state.db[i].enabled) {
        store.commit('disableFamily', i);
      } else {
        store.commit('enableFamily', i);
      }
    },
  },
};
</script>

<style lang="scss">

</style>
