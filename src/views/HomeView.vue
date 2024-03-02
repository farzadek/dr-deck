<template>
  <Hero-Component />
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
