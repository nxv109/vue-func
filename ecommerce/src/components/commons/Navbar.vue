<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-container">
        <div class="nav-left">
          <router-link to="/">Home</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>
        <div class="nav-right">
          <router-link to="/cart">
            <i class="fa fa-opencart cart-icon" style="font-size:24px"><span>{{ amount }}</span></i>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Navbar',
  data() {
    return {
      amount: this.$store.state.cart.amount,
    }
  },
  computed: {
    newAmount: function() {
      return this.$store.state.cart.amount;
    },
  },
  watch: {
    newAmount: function(newValue, oldValue) { // newCount sẽ kiểm tra sự thay đổi newCount ở computed
      if (newValue !== oldValue) { // giá trị ở đây sẽ so sánh mới và cũ nếu khác nhau thì sẽ update state và component sẽ re-render
        this.amount = newValue;
      }
    }
  }
}
</script>
<style lang="css" scoped>
.navbar {
  background: #0b133c;
  color: #ee9cd2;
  padding: 1rem 0;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-container a {
  color: inherit;
  text-decoration: none;
  margin-right: 1rem;
  font-weight: bold;
}

.cart-icon {
  position: relative;
}

.cart-icon span {
  position: absolute;
  right: -15px;
  top: -10px;

  display: block;

  font-size: 16px;
  font-weight: bold;
  color: #fff;
}
</style>