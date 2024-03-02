<template>
  <v-app-bar>
    <v-container>
      <v-row>
        <div class="logo-title-box">
          <span class="logo-title">Dr-DECK</span>
        </div>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
          class="d-flex d-md-none"
          icon="mdi-menu"
          color="white"
        ></v-app-bar-nav-icon>
      </v-row>
    </v-container>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" absolute temporary>
    <div class="text-h5 text-center my-6">{{ $t("appbar.whatWeDo") }}</div>
    <v-list nav dense>
      <v-btn
        v-for="item in $store.getters['common/heroLinks']"
        :key="item.route"
        variant="plain"
        block
        :to="item.route"
        class="mb-2"
        :text="$t(`appbar.items.${item.text}`)"
      />
    </v-list>
    <v-btn
      class="mt-6"
      variant="plain"
      block
      @click="
        $root.$i18n.locale = $t('appbar.lang');
        drawer = false;
      "
      >{{ $t("appbar.lang") }}
    </v-btn>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "appbar-component",
  data() {
    return {
      drawer: false,
    };
  },
  methods: {},
  mounted() {
    this.$store.commit("common/setIncludes", { route: this.$route.path });
  },
};
</script>
