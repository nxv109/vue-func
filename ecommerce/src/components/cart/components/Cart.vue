<template>
  <section class="cart">
    <div class="container">
      <h1 class="title">{{ title }}</h1>
      <div v-if="products.length === 0">Cart empty
        <router-link to="/"> go home</router-link>
      </div>
      <table v-else>
        <thead>
          <th>STT</th>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Amount</th>
          <th>Action</th>
        </thead>
        <CartItems v-for="(product, index) in products" :key="index" :product="product" @delete-product="handleDelete" />
      </table>
    </div>
  </section>
</template>
<script>
import CartItems from "./CartItems.vue"
export default {
  name: 'Cart',
  data() {
    return {
      title: 'Cart',
      products: [],
    }
  },
  components: {
    CartItems,
  },
  computed: {
    newProducts: function() {
      return this.$store.state.cart.data;
    }
  },
  watch: {
    newProducts: function(oldValue, newValue) {
      if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
        console.log("watch", this.$store.state.cart.data);
        this.products = this.$store.state.cart.data;
      }
    }
  },
  methods: {
    handleDelete(id) {
      console.log(id);
      this.$store.dispatch({ type: 'cart/DELETE_PRO_OF_CART', id: id });
    },
  },
  mounted() {
    // call api de get cart data, hôgn có api nên sài store tạm :D
    this.products = this.$store.state.cart.data;
    console.log("mounted", this.products)
  }
}
</script>
<style lang="css">
table {
  width: 100%;
}

table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}

th,
td {
  padding: 1rem;
}
</style>