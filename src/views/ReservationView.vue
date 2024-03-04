<template>
  <Hero-Component :main-title="$t(`estimation.title`)" />
</template>

<script>
import HeroComponent from "@/components/Hero.vue";
export default {
  name: "ReservationView",
  components: {
    HeroComponent,
  },
};
</script>
