<template>
  <Hero-Component :main-title="$t('estimation.title')" />
  <v-container class="my8 my-md-16">
    <v-row justify="center">
      <v-col cols="12" sm="9" md="7" lg="6">
        <v-tabs v-model="resEstTab" grow>
          <v-tab v-for="item in resEstItems" :key="item" :value="item">
            {{ item }}
          </v-tab>
        </v-tabs>

        <v-window>
          <v-window-item class="pt-10">
            <Estimation v-if="resEstTab === resEstItems[0]" />
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HeroComponent from "@/components/Hero.vue";
import Estimation from "@/components/Estimation.vue";
export default {
  name: "ReservationView",
  components: {
    HeroComponent,
    Estimation,
  },
  data() {
    return {
      resEstTab: this.$t("estimation.estimation"),
      resEstItems: [
        this.$t("estimation.estimation"),
        this.$t("estimation.reservation"),
      ],
    };
  },
};
</script>
