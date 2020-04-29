<template>
  <section class="product">
    <div class="container">
      <h1 class="title">{{ msg }}</h1>
      <div class="product-box">
        <div class="product-items" v-for="product in products" :key="product.id">
          <figure>
            <img :src="require(`../../../assets/images/${product.images[0]}`)" :alt="product.title">
          </figure>
          <div class="product-title">{{ product.title }}</div>
          <div class="product-price">{{ product.price }}</div>
          <button @click="addToCart(product)">Add to cart</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Product',
  props: ['products'],
  data() {
    return {
      msg: "Product"
    }
  },
  methods: {
    addToCart(product) {
      const { id, title, images, information, price, rating, sizes } = product;

      const newProduct = {
        id,
        title,
        images,
        information,
        price,
        rating,
        sizes,
        amount: 1,
      };

      try {
        const cartData = this.$store.state.cart.data;

        const productExist = cartData.findIndex(v => v.id === id);

        if (productExist !== -1) {
          const confirmIncrease = window.confirm("Do you want increase amount?");

          if (!confirmIncrease) return;

          this.$store.dispatch({ type: 'cart/INCREASE_AMOUNT', cartIndex: productExist });
        }else {
          this.$store.dispatch({ type: 'cart/ADD_TO_CART', payload: newProduct });
          alert("Added successfully")
        }
      } catch(e) {
        console.log(e);
      }

      
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-box {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 3rem;
}

.product-items {
  width: calc(100% / 4 - 1rem);
}

.product-items img {
  width: 100%;
}
</style>