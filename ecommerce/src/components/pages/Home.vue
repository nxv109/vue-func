<template>
  <div class="hello">
    <div class="views"><i class="fa fa-eye"></i> {{ count }}</div>
    <Product :products="newProducts" />
  </div>
</template>
<script>
import Product from "../product/components/Product.vue";
export default {
  name: 'Home',
  data() {
    return {
      count: 0,
      products: []
    }
  },
  components: {
    Product,
  },
  computed: {
    newCount: function() {
      return this.$store.state.product.count;
    },
    newProducts: function() {
      return this.$store.state.product.data;
    }
  },
  watch: { // watch changes here
    newCount: function(newValue, oldValue) { // newCount sẽ kiểm tra sự thay đổi newCount ở computed

      if (newValue !== oldValue) { // giá trị ở đây sẽ so sánh mới và cũ nếu khác nhau thì sẽ update state và component sẽ re-render
        this.count = newValue;
      }
    },
    newProducts: function(newValue, oldValue) {
      if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
        this.products = newValue;
      }
    }
  },
  mounted() {
    this.$store.dispatch({ type: "product/GET_PRODUCTS" });
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.views {
  background: #0b133c;
  color: #fff;

  font-size: .8rem;

  display: inline-block;
  padding: 5px;
  margin-top: 2rem;
  border-radius: 5px;
}
</style>