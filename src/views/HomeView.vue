<template>
  <Hero-Component :main-title="$t(`appbar.items.deckStaining`)" />
  <deck-staining />
</template>

<script>
import HeroComponent from "@/components/Hero.vue";
import DeckStaining from "@/components/DeckStaining.vue";
export default {
  name: "HomeView",
  components: {
    HeroComponent,
    DeckStaining,
  },
};
</script>
