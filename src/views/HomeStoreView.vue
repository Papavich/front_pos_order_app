<template>
  <div>
    <!-- Navbar -->
    <NavbarComponentVue />
    <v-main>
      <router-view/>
    </v-main>
  </div>
</template>

<script>
import NavbarComponentVue from '@/components/NavbarComponent.vue';
export default {
    components: {
        NavbarComponentVue
    }
}
</script>

<style>

</style>