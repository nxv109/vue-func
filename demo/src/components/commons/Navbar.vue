<template>
  <nav class="navbar">
		 <div class="container">
			 <router-link to="/">Home</router-link>
			 <router-link to="/introduce">Introduce</router-link>
			 <router-link to="/contact">Contact</router-link>
			 <router-link to="/articles">Articles</router-link>
		 </div>
  </nav>
</template>
<script>
export default {
  name: 'Navbar'
}

</script>
<style scoped>
	 .navbar {
			padding: 1rem 0;
			background: black;
			color: #fff;
			text-transform: uppercase;
	 }

	 .navbar div a {
			color: inherit;
			text-decoration: none;
	 }

	 .navbar div a:not(:last-child) {
			margin-right: 1rem;
	 }

</style>
