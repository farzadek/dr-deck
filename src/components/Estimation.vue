<template>
  <v-form ref="estimationForm" class="estimation" @submit.prevent="calculate">
    <div class="text-h3 text-center">
      {{ $t("estimation.fastEsitmation") }}
    </div>
    <div class="my-6">
      <v-col class="mb-4">
        <div class="text-caption">
          {{ $t("estimation.projectTypes.label") }}
        </div>
        <v-divider></v-divider>
        <v-chip-group
          v-model="estimation.formInfo.project"
          mandatory
          column
          selected-class="bg-cuivre text-white"
        >
          <v-chip
            variant="outlined"
            size="large"
            v-for="item in estimation.projectTyps"
            :key="item"
            >{{ item }}</v-chip
          >
        </v-chip-group>
      </v-col>

      <v-col class="mb-3">
        <div class="text-caption">
          {{ $t("estimation.floorQualityLabel") }}
        </div>
        <v-divider></v-divider>
        <v-chip-group
          v-model="estimation.formInfo.floorQuality"
          mandatory
          column
          selected-class="bg-cuivre text-white"
        >
          <v-chip
            variant="outlined"
            v-for="item in estimation.floorQuality"
            :key="item.value"
            >{{ item.title }}</v-chip
          >
        </v-chip-group>
      </v-col>

      <div class="text-caption">
        {{ $t("estimation.dimention.label") }}
      </div>
      <v-divider></v-divider>
      <v-row class="mt-1">
        <v-col cols="5">
          <v-text-field
            color="#cea54a"
            :label="$t('estimation.dimention.width')"
            type="text"
            variant="outlined"
            :rules="dimentionRule"
            v-model="estimation.formInfo.dimention[0]"
          ></v-text-field>
        </v-col>
        <v-col cols="2" class="text-center text-h3">X</v-col>
        <v-col cols="5">
          <v-text-field
            color="#cea54a"
            :label="$t('estimation.dimention.length')"
            type="text"
            variant="outlined"
            :rules="dimentionRule"
            v-model="estimation.formInfo.dimention[1]"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-col>
        <v-btn type="submit" block size="large" color="#cea54a">{{
          $t("estimation.submit")
        }}</v-btn>
      </v-col>
    </div>
    <v-col class="mb-4">
      <v-card
        :loading="isLoading"
        :title="
          this.estimation.formInfo.result[0] ? $t('estimation.resultTitle') : ''
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
            class="mt-n1"
            density="compact"
            variant="outlined"
            v-model="estimation.formInfo.email"
            append-icon="mdi-email-arrow-right"
            @click:prepend="sendEmail"
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
            append-icon="mdi-send-variant-clock-outline"
          ></v-text-field>
        </div>
      </v-card>
    </v-col>
  </v-form>
</template>

<script>
export default {
  name: "Estimation-Component",
  components: {},
  computed: {},
  data() {
    return {
      isLoading: false,
      estimation: {
        formInfo: {
          dimention: [0, 0],
          project: 0,
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
  mounted() {
    this.animatePrice(1000, 1300);
  },
  methods: {
    calculate() {
      this.isLoading = true;
      const finalResult = [0, 0];
      if (this.$refs.estimationForm.isValid) {
        const dimention =
          this.estimation.formInfo.dimention[0] *
          this.estimation.formInfo.dimention[1];
        if (this.estimation.formInfo.project === 0) {
          const fixCost = 150;
          const prices = [7, 7.5, 8, 9, 9.5];
          const result =
            Number(dimention * prices[this.estimation.formInfo.floorQuality]) +
            fixCost;
          finalResult[0] = this.roundTo100(result);
          finalResult[1] = this.roundTo100(result * 1.2);
        }

        if (this.estimation.formInfo.project === 1) {
          const fixCost = 150;
          const prices = [6, 6, 6.5, 7, 8];
          const result =
            Number(dimention * prices[this.estimation.formInfo.floorQuality]) +
            fixCost;
          finalResult[0] = this.roundTo100(result);
          finalResult[1] = this.roundTo100(result * 1.2);
        }

        if (this.estimation.formInfo.project === 2) {
          const fixCost = 300;
          const prices = [6, 6, 6, 7.5, 9];
          const result =
            Number(dimention * prices[this.estimation.formInfo.floorQuality]) +
            fixCost;
          finalResult[0] = this.roundTo100(result);
          finalResult[1] = this.roundTo100(result * 1.15);
        }

        if (this.estimation.formInfo.project === 3) {
          const fixCost = 250;
          const prices = [8, 8, 8, 9, 10];
          const result =
            Number(dimention * prices[this.estimation.formInfo.floorQuality]) +
            fixCost;
          finalResult[0] = this.roundTo100(result);
          finalResult[1] = this.roundTo100(result * 1.35);
        }
      }
      this.animatePrice(finalResult[0], finalResult[1]);
      this.isLoading = false;
    },
    roundTo100(res) {
      return Math.ceil(res / 100) * 100;
    },
    sendEmail() {
      if (this.formInfo.email) {
        console.log(this.formInfo.email);
        console.log(this.formInfo);
      }
    },
    animatePrice(price1, price2) {
      let i = 0;
      const resultAnimate = setInterval(() => {
        i += 10;
        if (i > price2 && i > price1) clearInterval(resultAnimate);
        if (i <= price1) this.estimation.formInfo.result[0] = i;
        if (i <= price2) this.estimation.formInfo.result[1] = i;
      }, 60);
    },
    animateDiscountPrice(discount) {
      let i = discount;
      const resultAnimate = setInterval(() => {
        i -= 10;
        if (
          i < this.estimation.formInfo.result[0] &&
          i < this.estimation.formInfo.result[1]
        )
          clearInterval(resultAnimate);
        if (i >= this.estimation.formInfo.result[0])
          this.estimation.formInfo.result[0] = i;
        if (i >= this.estimation.formInfo.result[1])
          this.estimation.formInfo.result[1] = i;
      }, 100);
    },
  },
};
</script>
