<template>
  <v-app-bar>
    <v-container>
      <v-row>
        <v-col cols="12">
          <span class="logo-title">Dr-DECK</span>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import "../plugins/tools";

export default {
  name: "appbar-component",
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    async scrollToAnchorPoint(refName) {
      if (this.$route.path !== "/") await this.$router.push({ path: "/" });
      const el = document.getElementById(refName);
      el.scrollIntoView({ behavior: "smooth" });
      this.drawer = false;
    },
  },
};
</script>
