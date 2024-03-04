<template>
  <div class="hero-container">
    <picture class="hero-image">
      <source media="(min-width:600px)" :srcset="heroImages[0]" />
      <img :src="heroImages[0]" alt="dr deck" />
    </picture>
    <v-container>
      <v-row>
        <div class="hero-text-box">
          <h1>{{ mainTitle }}</h1>
          <v-btn
            :text="`${$t('hero.estimation')} / ${$t('hero.reservation')}`"
            size="large"
            to="reservation"
          ></v-btn>
        </div>
        <div class="d-none d-md-block hero-buttons-box mt-12">
          <div class="text-h4 d-block mb-2">
            {{ $t("hero.whatElse") }}
          </div>
          <v-btn
            v-for="btn in this.availableServices"
            :key="btn.route"
            :text="$t(`appbar.items.${btn.text}`)"
            :to="btn.route"
            class="mr-3"
            size="small"
          ></v-btn>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import heroD from "@/assets/images/main.jpg";
export default {
  name: "hero-component",
  props: {
    mainTitle: String,
  },
  data() {
    return {
      heroImages: [heroD],
      availableServices: [],
    };
  },
  mounted() {
    this.availableServices = this.$store.getters["common/heroLinks"].filter(
      (el) => el.route !== this.$route.path
    );
  },
};
</script>
