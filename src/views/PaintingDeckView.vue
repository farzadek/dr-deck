<template>
  <Hero-Component :main-title="$t(`appbar.items.paintingDeck`)" />
  <Deck-Painting />
</template>

<script>
import HeroComponent from "@/components/Hero.vue";
import DeckPainting from "@/components/DeckPainting.vue";
export default {
  name: "HomeView",
  components: {
    HeroComponent,
    DeckPainting,
  },
};
</script>
