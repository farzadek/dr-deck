<template>
  <v-footer class="d-block bg-grey-darken-4 py-6 w-100">
    <v-row justify="center" class="flex-column flex-sm-row" no-gutters>
      <v-btn
        v-for="item in $store.getters['common/heroLinks']"
        :key="item.route"
        variant="plain"
        :to="item.route"
        :text="$t(`appbar.items.${item.text}`)"
      />
      <v-btn
        variant="plain"
        size="small"
        @click="$root.$i18n.locale = $t('appbar.lang')"
        >{{ $t("appbar.lang") }}
      </v-btn>
    </v-row>
    <div class="pt-4 text-center w-100">
      {{ new Date().getFullYear() }} — dr-deck
    </div>
  </v-footer>
</template>
<script>
export default {
  name: "Footer-Component",
  data() {
    return {};
  },
};
</script>
