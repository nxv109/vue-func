<template>
  <div class="hello">
    <h1 class="alg-center">{{ msg }}</h1>
    <form @submit="handleSubmit">
    	<div class="form-items">
    		<div for="">Email</div>
    		<input type="email" v-model="user.email" >
    	</div>
    	<div class="form-items">
    		<div for="">Password</div>
    		<input type="password" v-model="user.password">
    	</div>
      <div class="form-items">
        <div for="">Favorites</div>
        <input type="checkbox" id="football" value="Football" v-model="user.favorites">
        <label for="football">Football</label>
        <input type="checkbox" id="music" value="Music" v-model="user.favorites">
        <label for="music">Music</label>
        <input type="checkbox" id="girls" value="Grils" v-model="user.favorites">
        <label for="girls">Grils</label>
      </div>
      <div class="form-items">
        <div>Gender</div>
        <input type="radio" name="gender" id="male" value="male" v-model="user.gender">
        <label for="male">Male</label>
        <input type="radio" name="gender" id="female" value="female" v-model="user.gender">
        <label for="female">Female</label>
      </div>
      <div class="form-items">
        <div>Country</div>
        <select v-model="user.country">
          <option disabled value="">Select your country</option>
          <option value="Quang Nam">Quang Nam</option>
          <option value="Da Nang">Da Nang</option>
          <option value="Hue">Hue</option>
        </select>
      </div>
    	<button type="submit">Register</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'Register',
  data () {
    return {
      msg: 'Register',
      user: {
      	email: "",
      	password: "",
        favorites: [],
        gender: "",
        country: ""
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
}

.form-items:not(:last-child) {
	margin-bottom: 1rem;
}
</style>
