<template>
  <section class="section portfolio-container" id="portfolioSection">
    <v-container>
      <v-row class="py-5 py-md-8">
        <v-col cols="12">
          <h3 class="section-subtitle mb-3">{{ $t("portfolio.subTitle") }}</h3>
          <h2 class="section-title mb-6">{{ $t("portfolio.title") }}</h2>
        </v-col>
      </v-row>
      <v-row class="mb-12">
        <h3 class="section-subtitle mb-3">
          {{ $t("portfolio.graphicSectionTitle") }}
        </h3>
        <v-col cols="12"> </v-col>
      </v-row>
      <v-row>
        <h3 class="section-subtitle mb-3">
          {{ $t("portfolio.uiSectionTitle") }}
        </h3>
        <v-col cols="12"> </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "portfolio-component",
  components: {},
  computed: {
    ...mapGetters("portfolio", ["portfoliosPreview"]),
    ...mapGetters("common", ["baseUrl"]),
    slidesPerPage() {
      let result = 2;
      if (this.$vuetify.display.smAndUp) result = 3;
      if (this.$vuetify.display.lgAndUp) result = 4;
      return result;
    },
    selectedFiles() {
      return {
        ui: this.$store.getters["portfolio/portfoliosPreview"]("ui"),
        graphic: this.$store.getters["portfolio/portfoliosPreview"]("graphic"),
      };
    },
  },
  async mounted() {
    await this.$store.dispatch("portfolio/loadPortfolio", "ui");
    await this.$store.dispatch("portfolio/loadPortfolio", "graphic");
  },
  methods: {},
};
</script>
