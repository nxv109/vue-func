<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
<script>
import Navbar from './components/commons/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>
<style lang="scss">
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  width: 980px;
  margin: auto;
}

h1 {
  margin: 3rem 0;
  font-size: 3rem;
}

button {
  position: relative;

  background: #d7d7d72b;
  color: #0b133c;

  font-weight: bold;

  border: none;
  border-radius: 10px;
  box-shadow: inset 0 0 20px 1px #0b133c;

  padding: .5rem 1rem;
  margin-top: 1rem;

  cursor: pointer;
  overflow: hidden;
  transition: all .5s;
  transition-delay: 0.8s;
  transform: scale(1);

  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;

    background: #0b133c;
    height: 100%;
    width: 10px;

    transform: skewX(-10deg) scale(1.5);
    transition: all .5s cubic-bezier(1, 0, 0, 1);
    z-index: -1;

  }

  &::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;

    background: #0b133c;
    height: 100%;
    width: 10px;

    transform: skewX(-10deg) scale(1.5);
    transition: all .5s cubic-bezier(1, 0, 0, 1);
    z-index: -1;
  }

  &:hover::after {
    width: calc(50%);
  }

  &:hover::before {
    width: calc(50%);
  }

  &:hover {
    color: #ee9cd2;
    transform: scale(1.2);
  }
}
</style>