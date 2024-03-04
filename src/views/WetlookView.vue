<template>
  <Hero-Component :main-title="$t(`appbar.items.wetlookConcrete`)" />
  <Wetlook-Concrete />
</template>

<script>
import HeroComponent from "@/components/Hero.vue";
import WetlookConcrete from "@/components/WetlookConcrete.vue";
export default {
  name: "WetlookView",
  components: {
    HeroComponent,
    WetlookConcrete,
  },
};
</script>
