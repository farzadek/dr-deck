<template>
  <div class="hero-container">
    <picture class="hero-image">
      <source media="(min-width:600px)" :srcset="heroImages[0]" />
      <img :src="heroImages[0]" alt="dr deck" />
    </picture>
    <v-container>
      <v-row>
        <div class="hero-text-box">
          <h1>{{ $t(`appbar.items.deckStaining`) }}</h1>
          <v-btn
            :text="`${$t('hero.estimation')} / ${$t('hero.reservation')}`"
          ></v-btn>
        </div>
        <div class="d-none d-md-block hero-buttons-box mt-12">
          <div class="text-h4 d-block mb-2">
            {{ $t("hero.whatElse") }}
          </div>
          <v-btn
            v-for="btn in $store.getters['common/availableHeroLinks']"
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
import { computed } from "vue";
export default {
  name: "hero-component",
  data() {
    return {
      currentPath: computed(() => this.$route.path),
      drawer: false,
      heroImages: [heroD],
    };
  },
  computed: {},
  mounted() {},
};
</script>
