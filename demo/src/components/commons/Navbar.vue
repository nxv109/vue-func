<template>
  <nav class="navbar">
    <div class="container">
      <div class="nav">
        <div class="nav-left">
          <router-link to="/">Home</router-link>
          <router-link to="/introduce">Introduce</router-link>
          <router-link to="/contact">Contact</router-link>
          <router-link to="/articles">Articles</router-link>
        </div>
        <div class="nav-right">
          <router-link class="login" to="/login">Login</router-link>
          <router-link class="register" to="/register">Register</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Navbar',
};

</script>
<style scoped>
.navbar {
  padding: 1rem 0;
  background: black;
  color: #fff;
  text-transform: uppercase;
}

.nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.register {
  color: red;
}

.navbar div a {
  color: inherit;
  text-decoration: none;
}

.navbar div a:not(:last-child) {
  margin-right: 1rem;
}

</style>
