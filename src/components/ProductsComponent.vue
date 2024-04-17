<template>
  <div class="products-container">
    <div class="products-title">
      <h2>Recent Product</h2>
    </div>
    <div class="product-show-container">
      <div
        class="products-show"
        v-for="(item, index) in allProduct"
        :key="index"
      >
        <!-- <div class="products-show"> -->
        <!-- <ProductCardComponent /> -->
        <!-- card product -->
        <ProductCardComponent :productName="item.productName" :productAmount="item.productAmount" :productId="item._id" :productURL="item.productURL" />

        <!-- card product -->
        <!-- <v-row>
            <v-col cols="3">
            </v-col>
        </v-row> -->
      </div>
    </div>
  </div>
</template>

<script>
import ProductCardComponent from "../components/ProductCardComponent.vue";
export default {
  components: {
    ProductCardComponent
  },
  data() {
    return {
      allProduct: [],
    };
  },

  created() {
    this.fetchAllProduct();
    // useEffect In React
  },
  methods: {
    async fetchAllProduct() {
      try {
        console.log("get all product");
        let productsInstance = await this.axios.get(
          "http://localhost:3000/products/api/v1/products"
        );
        console.log("productsInstance = ", productsInstance);
        console.log("index = ", productsInstance.data.data.length);
        this.allProduct = productsInstance.data.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scope>
.products-container {
  --tw-bg-opacity: 1;
  background-color: rgb(253 242 248 / var(--tw-bg-opacity));
}

.products-title {
  text-align: center;
  padding: 1rem;
}
.products-show {
  
}
.product-show-container {
  /* background: yellow; */
  max-width: 90vw;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 1rem;
}


</style>