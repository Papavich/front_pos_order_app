<template>
  <div class="delivery-container">
    <div class="delivery__one">
        <v-icon style="font-size: 3rem" size="x-large">mdi-truck-check-outline </v-icon>
        <div class="delivery__one--detail">
            <h4>Fast Delivery</h4>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
    </div>
    <div class="delivery__one">
        <v-icon style="font-size: 3rem" size="x-large" >mdi-cart-arrow-right  </v-icon>
        <div class="delivery__one--detail">
            <h4>Free Return</h4>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
    </div>
    <div class="delivery__one">
        <v-icon style="font-size: 3rem" size="x-large" >mdi-clock-time-eight-outline  </v-icon>
        <div class="delivery__one--detail">
            <h4>24/7 Support</h4>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .delivery-container {
        height: 150px;
        background: white;
        display: flex;
        justify-content: space-around;
        /* padding: 1rem 0; */
        align-items: center;
    }
    .delivery__one {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0 1rem;
    }

    

    .delivery__one--detail{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1rem 0;
    }
</style>