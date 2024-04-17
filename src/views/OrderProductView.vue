<template>
  <div class="create-order-container">
    <!-- Order Product -->
    <!-- show product id by params-->
    <!-- {{ $route.params.productId }} -->
    <div class="create-order__left">
      <div class="create-order__product-detail">
        <v-card class="create-order__product-detail-card">
          <div class="order-product__img">
            <img src="../assets/products/product_1.png" alt="" width="300" />
          </div>
          <div class="order-product__name">
            <h1>{{ productById.productName }}</h1>
          </div>
          <div class="order-product__price-amount">
            <span><strong>ราคา</strong> {{ productById.productPrice }} บาท</span>
            <span><strong>จำนวน</strong> {{ productById.productAmount }} ชิ้น</span>
          </div>
        </v-card>
      </div>
    </div>
    <div class="create-order__right">
      <v-card class="create-order__input-amount">
        <div>
            <v-text-field
                name="orderName"
                label="Order Name"
                id="orderName"
                v-model="orderName"
            ></v-text-field>
        </div>
        <div class="create-order__title-amount"><h1>จำนวน:</h1></div>
        <div class="create-order__set-amount">
          <div @click="increaseAmount()" class="set-amount__add">+</div>
          <div class="set-amount__number">{{productAmount}}</div>
          <div @click="decreaseAmount()" class="set-amount__remove">-</div>
        </div>
        <div class="create-order__create-order-btn">
          <v-btn @click="createOrder()" color="success">ซื้อสินค้า</v-btn>
          <v-btn @click="cancelOrder()" color="warning">ยกเลิก</v-btn>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import {getUserToken} from "../services/AllServices";
export default {
  mounted() {
    // Accessing router params in the mounted hook
    const productIdParams = this.$route.params.productId;
    // console.log(productIdParams); // This will log the value of the 'id' parameter from the route
    this.productId = productIdParams;
  },
  data() {
    return {
      orderName:"",
      productId: "",
      productById: {},
      productAmount: 1,
      userToken: ""
    };
  },
  created() {
    this.getProductById();
  },
  methods: {
    cancelOrder() {
        this.$router.push("/store");
    },
    async getProductById() {
      try {
        let paramsId = this.$route.params.productId;
        let product = await this.axios.get(
          `http://localhost:3000/products/api/v1/products/${paramsId}`
        );
        console.log("product id = ", this.productId);
        console.log("product = ", product);
        this.productById = product.data.data;
        // get user token
        let myToken = getUserToken();
        this.userToken = myToken;
      } catch (error) {
        console.log(error);
      }
    },
    increaseAmount(){
        this.productAmount++
    },
    decreaseAmount(){
        if(this.productAmount >= 2){
            this.productAmount--
        } else {    
            return false;
        }
    },
    async createOrder(){
        try {
            let paramsId = this.$route.params.productId;
            let createOrderInstance = await this.axios.post(`http://localhost:3000/orders/api/v1/products/${paramsId}/orders`, {orderName:this.orderName, orderProductAmount:this.productAmount}, {headers: {authorization: `${this.userToken}`}});
            console.log(createOrderInstance);
            alert("สร้าง Order สำเร็จ"+" ยอดรวม: "+ createOrderInstance.data.data.orderProductTotalPrice +" บาท");
            
            this.$router.push('/store');

        } catch (error) {
            console.log(error);
            alert("สร้าง Order ล้มเหลว");
        }
    }
  },
};
</script>

<style scope>
.create-order__create-order-btn {
    display: flex;
    gap: 0 1rem;
}
.create-order__set-amount {
  
  width: 35%;
  box-shadow: -3px 2px 14px -6px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -3px 2px 14px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -3px 2px 14px -6px rgba(0, 0, 0, 0.75);
}
.create-order__set-amount {
  display: flex;
  gap: 0 1rem;
  justify-content: space-between;
}


.create-order__input-amount {
  padding: 1rem;
  display: grid;
  gap: 2rem 0;
}
.set-amount__add,
.set-amount__remove {
  padding: 1rem 1.5rem;
  background: rgb(255, 247, 247);
  cursor: pointer;
}
.set-amount__number {
  padding: 1rem 1.5rem;
}
.create-order-container {
  width: 100vw;
  height: 100vh;
  /* background: green; */
  display: flex;
}
.create-order__left {
  flex: 1;
  /* background: orange; */
}

.create-order__right {
  flex: 1;
  padding: 2rem 0;
  /* background: red; */
}
.create-order__product-detail {
  padding: 2rem;
}
.order-product__price-amount {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  font-size: 1.5rem;
}
.create-order__product-detail-card {
  padding: 1rem;
}
</style>