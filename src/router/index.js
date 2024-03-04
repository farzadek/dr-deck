import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PaintingDeckView from "../views/PaintingDeckView.vue";
import WetlookView from "../views/WetlookView.vue";
import PaintingParking from "../views/PaintingParkingView.vue";
import ReservationView from "../views/ReservationView.vue";
import i18n from "@/plugins/i18n";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/painting-deck",
    name: "paintingDeck",
    component: PaintingDeckView,
  },
  {
    path: "/wetlook-concrete",
    name: "wetlook-concrete",
    component: WetlookView,
  },
  {
    path: "/painting-parking",
    name: "painting-parking",
    component: PaintingParking,
  },
  {
    path: "/reservation",
    name: "reservation",
    component: ReservationView,
  },
  { path: "/:pathMatch(.*)", component: HomeView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  let lang = to.params.lang;
  if (!lang) {
    i18n.local = "en";
  }
});

export default router;
