const state = () => ({
  heroLinks: [
    { route: "/", text: "deckStaining", include: true },
    { route: "painting-deck", text: "paintingDeck", include: true },
    { route: "painting-concrete", text: "paintingConcrete", include: true },
    { route: "wetlook-concrete", text: "wetlookConcrete", include: true },
    { route: "painting-parking", text: "paintingParking", include: true },
  ],
});

// getters
const getters = {
  baseUrl: () =>
    process.env.NODE_ENV === "production"
      ? "https://dr-deck.ca"
      : "http://localhost:8080/dr-vue",
  availableHeroLinks: (state) => state.heroLinks.filter((item) => item.include),
  heroLinks: (state) => state.heroLinks,
};

// actions
const actions = {};

// mutations
const mutations = {
  setIncludes: function (state, route) {
    state.heroLinks.forEach((element) => {
      element.include = element.route !== route.route ? true : false;
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
