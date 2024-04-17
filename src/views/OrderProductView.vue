<template>
  <div>
    <NavbarComponent />
    <!-- content -->
    <div class="create-order-container">
      <!-- Order Product -->
      <!-- show product id by params-->
      <!-- {{ $route.params.productId }} -->
      <div class="create-order__left">
        <div class="create-order__product-detail">
          <div class="create-order__product-detail-card">
            <div class="order-product__img">
              <img :src="productById.productURL" alt="" width="300" />
            </div>
            <div class="order-product__name">
              <h1>{{ productById.productName }}</h1>
            </div>
            <div class="detail_price">
              <span>ผ่อน 0 %</span>
            </div>
            <div class="create-order__product-detail-01">
              <h2>รายละเอียดสินค้า</h2>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
            <div class="order-product__price-amount">

              <span><strong>จำนวนสินค้าในร้าน: </strong>
                {{ productById.productAmount }} ชิ้น</span
              >
            </div>
          </div>
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
          
          <div><p class="create-order__price-number">ราคา : ฿ {{ productById.productPrice }}</p></div>
          <div class="create-order__title-amount"><h2>จำนวน:</h2></div>
          <div class="create-order__set-amount">
            <div @click="increaseAmount()" class="set-amount__add">+</div>
            <div class="set-amount__number">{{ productAmount }}</div>
            <div @click="decreaseAmount()" class="set-amount__remove">-</div>
          </div>
          <div class="create-order__create-order-btn">
            <v-btn @click="createOrder()" color="success">ซื้อสินค้า</v-btn>
            <v-btn @click="cancelOrder()" color="warning">ยกเลิก</v-btn>
          </div>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import { getUserToken } from "../services/AllServices";

export default {
  components: {
    NavbarComponent,
  },
  mounted() {
    // Accessing router params in the mounted hook
    const productIdParams = this.$route.params.productId;
    // console.log(productIdParams); // This will log the value of the 'id' parameter from the route
    this.productId = productIdParams;
  },
  data() {
    return {
      orderName: "",
      productId: "",
      productById: {},
      productAmount: 1,
      userToken: "",
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
    increaseAmount() {
      this.productAmount++;
    },
    decreaseAmount() {
      if (this.productAmount >= 2) {
        this.productAmount--;
      } else {
        return false;
      }
    },
    async createOrder() {
      try {
        let paramsId = this.$route.params.productId;
        let createOrderInstance = await this.axios.post(
          `http://localhost:3000/orders/api/v1/products/${paramsId}/orders`,
          { orderName: this.orderName, orderProductAmount: this.productAmount },
          { headers: { authorization: `${this.userToken}` } }
        );
        console.log(createOrderInstance);
        alert(
          "สร้าง Order สำเร็จ" +
            " ยอดรวม: " +
            createOrderInstance.data.data.orderProductTotalPrice +
            " บาท"
        );

        this.$router.push("/store");
      } catch (error) {
        console.log(error);
        alert("สร้าง Order ล้มเหลว");
      }
    },
  },
};
</script>

<style scope>
.create-order__price-number {
  font-size: 30px;
  color: red;
  font-weight: bold;
}
.create-order__product-detail-01 {
  padding: 1rem 0;
}
.detail_price span {
  border: 2px solid purple;
  padding: 0 1rem;
}
.order-product__img {
  /* background: green; */
  display: flex;
  justify-content: center;
}
.order-product__img img {
  width: 230px;
  height: 230px;
  object-fit: cover;
}
.create-order__create-order-btn {
  display: flex;
  gap: 0 1rem;
}
.create-order__set-amount {
  width: 25%;
  border: 1px solid rgb(173, 173, 173);
  
}
.create-order__set-amount {
  display: flex;
  /* gap: 0 1rem; */
  justify-content: space-between;
}

.create-order__input-amount {
  padding: 1rem;
  display: grid;
  gap: 2rem 0;
}
.set-amount__add,
.set-amount__remove {
  padding: 0.3rem 1.5rem;
  background: rgb(255, 255, 255);
  cursor: pointer;
  border: 0.5px solid rgb(186, 186, 186);
}
.set-amount__number {
  padding: 0.3rem 1.5rem;
  
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
  padding: 2rem;
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