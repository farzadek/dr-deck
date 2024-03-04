<template>
  <Hero-Component :main-title="$t(`appbar.items.paintingParking`)" />
  <Painting-Parking />
</template>

<script>
import HeroComponent from "@/components/Hero.vue";
import PaintingParking from "@/components/PaintingParking.vue";
export default {
  name: "PaintingParkingView",
  components: {
    HeroComponent,
    PaintingParking,
  },
};
</script>
