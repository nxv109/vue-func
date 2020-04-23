<template>
  <main id="app">
		<Navbar></Navbar>
		 <div class="main-content">
				<div class="container">
					<router-view />
				</div>
		 </div>
  </main>
</template>
<script>
import Navbar from './components/commons/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}

</script>
<style>
* {
	 margin: 0;
	 padding: 0;
	 box-sizing: border-box;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
	 width: 1100px;
	 margin: auto;
}

.main-content {
	 margin-top: 2rem;
}

h1 {
	 margin: 2rem 0;
}

h2 {
	 transition: all .3s;
}


.alg-center {
	 text-align: center;
}
</style>
