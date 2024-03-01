<template>
  <v-app>
    <AppbarComponent></AppbarComponent>
    <router-view />
    <Footer-Component></Footer-Component>
  </v-app>
</template>
<script>
import AppbarComponent from "./components/Appbar.vue";
import FooterComponent from "./components/Footer.vue";
export default {
  components: { FooterComponent, AppbarComponent },
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
</style>
