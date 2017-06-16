<template>
  <div id="app">
    
  </div>
</template>

<script>
import 'normalize.css';

import Toolbar from './components/Toolbar';
import Card from './components/Card';

export default {
  name: 'app',
  components: {
    Card,
    Toolbar,
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
