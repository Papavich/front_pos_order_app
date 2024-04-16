<template>
  <div class="store-container">
    <div class="store-banner">
      <div class="banner-left">
        <div class="banner-left__detail">
          <h4>Beauty Cosmetics Makeup</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            la
            borum. <br>
            adipisicing elit. Doloremque,
            la
            borum.
          </p>
          <p class="price">150.-฿</p>
          <div class="banner-left__button">
            <button class="banner-left__button--icon">
              <v-icon color="white">mdi-shopping-outline</v-icon><span> Buy Now</span>
            </button>
            <div class="banner-left__button--link"><a class="" href="#">Watch our video</a></div>
          </div>
        </div>
      </div>
      <div class="banner-right">
        <img src="../assets/store/cosmatic_hero_bg.png" alt="" />
      </div>
    </div>
    <!--  BANNER -->
    <DeliveryComponent/>

    <!--  PRODUCTS -->
    <ProductsComponent  />
  </div>
</template>

<script>
import DeliveryComponent from "../components/DeliveryComponent.vue";
import ProductsComponent from "../components/ProductsComponent.vue";
export default {
  components: {
    DeliveryComponent,
    ProductsComponent
  }
};
</script>

<style>
.store-container {
  margin-top: 2rem;
  width: 100vw;
  min-height: 100vh;
  /* background: yellowgreen; */
}

.store-banner {
  height: 400px;
  display: flex;
  --tw-bg-opacity: 1;
  background-color: rgb(253 242 248 / var(--tw-bg-opacity));
}
.banner-left {
  /* background: green; */
  flex: 1;
  display: flex;
  justify-content: center;

  align-items: center;
}
.banner-left__detail {
  /* margin-left: 5rem; */
  display: grid;
  gap: 1px 0;
}
.banner-left__button--icon {
  background: rgb(233, 107, 107);
  color: white;
  padding: 0.5rem;
  border-radius: 0.5rem;
}

.banner-left__button {
  display: flex;
  align-content: center;
  gap: 1rem;
}
.banner-left__button--link {
  display: flex;
  justify-content: center;
  align-items: center;
}
.price {
  font-size: 1.2rem;
  font-weight: bold;
}

.banner-left__button--link a {
  text-decoration: none;
  color: black;
  font-style: italic;
}

.banner-right {
  /* background: red; */
  flex: 1;
}
</style>