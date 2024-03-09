<template>
  <Hero-Component :main-title="$t('estimation.title')" />
  <v-container class="my8 my-md-16">
    <v-row justify="center">
      <v-col cols="12" sm="9" md="7" lg="6">
        <v-form ref="estimationForm" @submit.prevent="calculate">
          <div class="text-h3 text-center">
            {{ $t("estimation.fastEsitmation") }}
          </div>
          <div class="my-6">
            <v-col class="mb-4">
              <v-card
                :loading="isLoading"
                :title="
                  this.estimation.formInfo.result[0]
                    ? $t('estimation.resultTitle')
                    : ''
                "
                class="pa-4"
                elevation="3"
              >
                <div
                  v-show="this.estimation.formInfo.result[0]"
                  class="text-h4 font-weight-bold text-center my-6 text-brown-lighten-1"
                  color="#cea54a"
                >
                  {{ estimation.formInfo.result[0] }}&nbsp;~&nbsp;{{
                    estimation.formInfo.result[1]
                  }}&nbsp;$
                </div>
                <div v-show="this.estimation.formInfo.result[0]">
                  {{ $t("estimation.resultContent") }}
                </div>
                <div>
                  <v-checkbox
                    :label="$t('estimation.needEmailLabel')"
                    v-model="estimation.needEmail"
                    color="#cea54a"
                    hide-details
                  ></v-checkbox>
                  <v-text-field
                    v-show="estimation.needEmail"
                    color="#cea54a"
                    :label="$t('estimation.yourEmail')"
                    :hint="$t('estimation.yourEmailHint')"
                    :rules="estimation.needEmail ? emailRule : []"
                    type="email"
                    class="mt-n3"
                    density="compact"
                    variant="outlined"
                    v-model="estimation.formInfo.email"
                  ></v-text-field>
                </div>
                <div>
                  <v-checkbox
                    :label="$t('estimation.needPhoneLabel')"
                    v-model="estimation.needPhone"
                    color="#cea54a"
                    hide-details
                  ></v-checkbox>
                  <v-text-field
                    v-show="estimation.needPhone"
                    color="#cea54a"
                    :label="$t('estimation.yourPhone')"
                    :hint="$t('estimation.yourPhoneHint')"
                    :rules="estimation.needPhone ? phoneRule : []"
                    type="phone"
                    class="mt-n3"
                    density="compact"
                    variant="outlined"
                    v-model="estimation.formInfo.phone"
                  ></v-text-field>
                </div>
              </v-card>
            </v-col>

            <v-col class="mb-4">
              <v-select
                v-model="estimation.formInfo.project"
                :hint="$t('estimation.projectTypes.hint')"
                :items="estimation.projectTyps"
                :label="$t('estimation.projectTypes.label')"
                persistent-hint
                variant="outlined"
                color="#cea54a"
              ></v-select>
            </v-col>

            <v-col class="mb-3">
              <v-select
                v-model="estimation.formInfo.floorQuality"
                :hint="$t('estimation.floorQualityHint')"
                :items="estimation.floorQuality"
                :label="$t('estimation.floorQualityLabel')"
                item-title="title"
                item-value="value"
                persistent-hint
                color="#cea54a"
                variant="outlined"
              ></v-select>
            </v-col>

            <v-col>
              <v-text-field
                color="#cea54a"
                :label="$t('estimation.dimention.label')"
                :hint="$t('estimation.dimention.hint')"
                type="text"
                variant="outlined"
                :rules="dimentionRule"
                v-model="estimation.formInfo.dimention"
              ></v-text-field>
            </v-col>

            <v-col>
              <v-btn type="submit" block size="large" color="#cea54a">{{
                $t("estimation.submit")
              }}</v-btn>
            </v-col>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HeroComponent from "@/components/Hero.vue";
export default {
  name: "ReservationView",
  components: {
    HeroComponent,
  },
  data() {
    return {
      isLoading: false,
      estimation: {
        formInfo: {
          dimention: 0,
          project: this.$t("appbar.items.deckStaining"),
          floorQuality: 0,
          needEmail: false,
          email: "",
          phone: "",
          needCall: false,
          result: [0, 0],
        },
        projectTyps: [
          this.$t("appbar.items.deckStaining"),
          this.$t("appbar.items.paintingDeck"),
          this.$t("appbar.items.wetlookConcrete"),
          this.$t("appbar.items.paintingParking"),
        ],
        floorQuality: [
          { title: this.$t("estimation.woodQuality.brandNew"), value: 0 },
          { title: this.$t("estimation.woodQuality.veryGood"), value: 1 },
          { title: this.$t("estimation.woodQuality.good"), value: 2 },
          { title: this.$t("estimation.woodQuality.littleAged"), value: 3 },
          { title: this.$t("estimation.woodQuality.veryOld"), value: 4 },
        ],
      },
      dimentionRule: [
        (v) => !!v || this.$t("estimation.dimention.require"),
        (v) =>
          (v && /^\d+$/.test(v) === true) ||
          this.$t("estimation.dimention.format"),
      ],
      emailRule: [
        (v) => !!v || this.$t("estimation.emailRequired"),
        (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || this.$t("estimation.emailFormat");
        },
      ],
      phoneRule: [
        (v) => !!v || this.$t("estimation.phoneRequired"),
        (value) => {
          const pattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
          return pattern.test(value) || this.$t("estimation.phoneFormat");
        },
      ],
    };
  },
  methods: {
    calculate() {
      if (this.$refs.estimationForm.isValid) {
        if (
          this.estimation.formInfo.project ===
          this.$t("appbar.items.deckStaining")
        ) {
          const fixCost = 150;
          const prices = [7, 7.5, 8, 9, 9.5];
          const result =
            Number(
              this.estimation.formInfo.dimention *
                prices[this.estimation.formInfo.floorQuality]
            ) + fixCost;
          this.estimation.formInfo.result[0] = this.roundTo100(result);
          this.estimation.formInfo.result[1] = this.roundTo100(result * 1.2);
        }

        if (
          this.estimation.formInfo.project ===
          this.$t("appbar.items.paintingDeck")
        ) {
          const fixCost = 150;
          const prices = [6, 6, 6.5, 7, 8];
          const result =
            Number(
              this.estimation.formInfo.dimention *
                prices[this.estimation.formInfo.floorQuality]
            ) + fixCost;
          this.estimation.formInfo.result[0] = this.roundTo100(result);
          this.estimation.formInfo.result[1] = this.roundTo100(result * 1.2);
        }

        if (
          this.estimation.formInfo.project ===
          this.$t("appbar.items.wetlookConcrete")
        ) {
          const fixCost = 300;
          const prices = [6, 6, 6, 7.5, 9];
          const result =
            Number(
              this.estimation.formInfo.dimention *
                prices[this.estimation.formInfo.floorQuality]
            ) + fixCost;
          this.estimation.formInfo.result[0] = this.roundTo100(result);
          this.estimation.formInfo.result[1] = this.roundTo100(result * 1.15);
        }

        if (
          this.estimation.formInfo.project ===
          this.$t("appbar.items.paintingParking")
        ) {
          const fixCost = 250;
          const prices = [8, 8, 8, 9, 10];
          const result =
            Number(
              this.estimation.formInfo.dimention *
                prices[this.estimation.formInfo.floorQuality]
            ) + fixCost;
          this.estimation.formInfo.result[0] = this.roundTo100(result);
          this.estimation.formInfo.result[1] = this.roundTo100(result * 1.35);
        }
      }
    },
    roundTo100(res) {
      return Math.ceil(res / 100) * 100;
    },
  },
};
</script>
