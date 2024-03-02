<template>
  <v-container class="service">
    <v-row justify="center">
      <v-col cols="11">
        <div class="card">
          <div class="img">
            <img :src="img1" alt="" />
          </div>
          <div class="content">
            <div class="text-h3 mb-6 font-secondary font-weight-black">01</div>
            <div class="text-h6 font-weight-bold">
              {{ $t("deckStaining.step1.title") }}
            </div>
            <div class="text-subtitle1">
              {{ $t("deckStaining.step1.content") }}
            </div>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="11">
        <div class="card">
          <div class="img">
            <img :src="img2" alt="" />
          </div>
          <div class="content">
            <div class="text-h3 mb-6 font-secondary font-weight-black">02</div>
            <div class="text-h6 font-weight-bold">
              {{ $t("deckStaining.step2.title") }}
            </div>
            <div class="text-subtitle1">
              {{ $t("deckStaining.step2.content") }}
            </div>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="11">
        <div class="card">
          <div class="img">
            <img :src="img3" alt="" />
          </div>
          <div class="content">
            <div class="text-h3 mb-6 font-secondary font-weight-black">03</div>
            <div class="text-h6 font-weight-bold">
              {{ $t("deckStaining.step3.title") }}
            </div>
            <div class="text-subtitle1">
              {{ $t("deckStaining.step3.content") }}
            </div>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="11">
        <div class="card">
          <div class="img">
            <img :src="img4" alt="" />
          </div>
          <div class="content">
            <div class="text-h3 mb-6 font-secondary font-weight-black">04</div>
            <div class="text-h6 font-weight-bold">
              {{ $t("deckStaining.step4.title") }}
            </div>
            <div class="text-subtitle1">
              {{ $t("deckStaining.step4.content") }}
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import img1 from "@/assets/images/deck-staining1.jpg";
import img2 from "@/assets/images/deck-staining2.jpg";
import img3 from "@/assets/images/deck-staining3.jpg";
import img4 from "@/assets/images/deck-staining4.jpg";
export default {
  name: "deck-staining",
  components: {},
  computed: {},
  data() {
    return {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    };
  },
  methods: {},
};
</script>
