<template>
  <div id="app">
    <toolbar />
    <card-board />
  </div>
</template>

<script>
import 'normalize.css';

import Toolbar from './components/Toolbar';
import CardBoard from './components/CardBoard';

export default {
  name: 'app',
  components: {
    Toolbar,
    CardBoard,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
