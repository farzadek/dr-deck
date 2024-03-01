<template>
  <div class="hero-container">
    <picture class="hero-image">
      <source media="(min-width:600px)" :srcset="heroD" />
      <img :src="heroImages[0]" alt="dr deck" />
    </picture>
    <div class="hero-text-box">
      <h1>{{ $t(`hero.deckStaining`) }}</h1>
      <v-btn
        :text="`${$t('hero.estimation')} / ${$t('hero.reservation')}`"
      ></v-btn>
    </div>
    <div class="hero-buttons-box">
      <v-btn :text="$t('hero.estimation')"></v-btn>
    </div>
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
      buttonsBottoms: [
        { route: "staining-deck", text: "stainingDeck", include: true },
        { route: "painting-deck", text: "paintingDeck", include: true },
        { route: "painting-concrete", text: "paintingConcrete", include: true },
        { route: "wetlook-concrete", text: "wetlookConcrete", include: true },
        { route: "painting-parking", text: "paintingParking", include: true },
      ],
    };
  },
};
</script>
