<template>
  <div class="hello">
    <h1 class="alg-center">{{ msg }}</h1>
    <form @submit="handleSubmit">
    	<div class="form-items">
    		<label for="">Email</label>
    		<input type="email" v-model="user.email" >
    	</div>
    	<div class="form-items">
    		<label for="">Password</label>
    		<input type="password" v-model="user.password">
    	</div>
    	<button type="submit">Button</button>

    	<p>email: {{ user.email }}</p>
    	<p>password: {{ user.password }}</p>

    </form>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Login',
      user: {
      	email: "",
      	password: ""
      }
    }
  },
  methods: {
  	handleSubmit (e) {
  		e.preventDefault();
  		console.log("user", this.user);
  	}
  }
}

</script>
<!-- Thêm thuộc tính "scoped" để chỉ giới hạn CSS cho thành phần này -->
<style scoped>
label{
	display: block;
}

.form-items:not(:last-child) {
	margin-bottom: 1rem;
}
</style>
