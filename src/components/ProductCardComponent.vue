<template>
  <v-card class="product-card">
    <!-- card -->
    <div class="product-card">
      <div class="product-card__img">
        <img src="../assets/products/product_1.png" alt="" />
      </div>
      <div class="product-card__detail">{{productName}}</div>
      <div>จำนวน: {{productAmount}}</div>
      <div class="product-card__button">
        <button @click="buyProduct()" class="btn-grad-buy"><span>ซื้อสินค้า</span></button>
        <!--  -->
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ['productName', 'productId', 'productAmount'],
  data(){
    return {
      id: this.productId
    }
  },
  methods: {
    buyProduct(){
      console.log(this.id);
      this.$router.push(`/create-order/${this.id}`);
    }
  }
};
</script>

<style scope>
a {
  color: white;
  text-decoration: none;
}

.btn-grad-buy {
  background: rgb(245, 109, 109);
  margin: 10px;
  /* padding: 15px 45px; */
  padding: 0.5rem 1rem;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
  text-decoration: none;
  
}

.btn-grad-buy a {
  color: white;
}

.product-card {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem 0;
  /* background: white; */
  /* border: 1px solid black; */
}
</style>