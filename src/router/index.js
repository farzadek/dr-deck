import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFoundComponent from "../views/NotFound.vue";
import i18n from "@/plugins/i18n";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  { path: "/:pathMatch(.*)", component: NotFoundComponent },
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
