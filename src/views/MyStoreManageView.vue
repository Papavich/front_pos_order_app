<template>
  <div class="store-manage-container">
    <div>
      <v-btn color="green" class="white--text" >Add New Product</v-btn>
    </div>
    <!-- ทำ v-for -->
    <div class="product-table-manage">
      Product List
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      myProducts: []
    }
  },
  methods: {
    fetchAllProduct() {
      console.log("get all product");
    }
  }
}
</script>

<style scope>
  .store-manage-container {
    margin: 2rem 2rem;
  }
  .product-table-manage {
    margin-top: 2rem;
  }
</style>