<template src="./ProductAll.html"></template>

<script>
import axios from "axios";

export default {
  name: "ProductAll",
  mounted() {
  this.loadProducts();
  },
  data() {
    return{
      products: []
    }
  },
  methods:{
   async loadProducts() {
     await axios.get('https://fakestoreapi.com/products').then(res =>{
        this.products = res.data;
        console.log(res.data)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

</style>