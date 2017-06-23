<template>
  <div id="app">
    <div class="container-fluid">
      <toolbar />
      <card-board />
    </div>
  </div>
</template>

<script>
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

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
  color: #2c3e50;
  margin-top: 40px;

  @media (max-width: 575px) {
    margin-top: 0;
  }
}

*,
*:after,
*:before {
  box-sizing: border-box;
}

html {
  box-sizing: border-box;
}

body {
  line-height: 1;

  overflow-x: hidden;

  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;

  list-style: none;
}

p {
  margin: 0;
  padding: 0;
}

textarea {
  resize: vertical;
}

img {
  display: block;

  max-width: 100%;
  height: auto;
}

.justify-content-center {
  justify-content: center;
}

</style>
