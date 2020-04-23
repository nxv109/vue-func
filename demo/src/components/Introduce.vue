<template>
  <div class="hello">
    <h1 class="alg-center">{{ msg }}</h1>
  </div>
</template>
<script>
export default {
  name: 'Introduce',
  data () {
    return {
      msg: 'This is Introduce page'
    }
  }
}

</script>
<!-- Thêm thuộc tính "scoped" để chỉ giới hạn CSS cho thành phần này -->
<style scoped>
</style>
