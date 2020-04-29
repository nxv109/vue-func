<template>
  <tbody>
    <td class="cart-items">{{ product.id}}</td>
    <td class="cart-items"><img :src="require(`../../../assets/images/${product.images[0]}`)" :alt="product.title"></td>
    <td class="cart-items">{{ product.title }}</td>
    <td class="cart-items">{{ product.price}}</td>
    <td class="cart-items">{{ product.amount }}</td>
    <td class="cart-items"><button @click="deleteProduct(product.id)">Delete</button></td>
  </tbody>
</template>
<script>
export default {
  name: 'CartItems',
  props: ['product'],
  data() {
    return {

    }
  },
  methods: {
    deleteProduct(id) {
      this.$emit('delete-product', id);
    }
  }
}
</script>
<style lang="scss" scoped>
.cart-items {
  img {
    width: 100px;
  }
}
</style>