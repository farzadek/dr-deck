const state = () => ({
  heroLinks: [
    { route: "staining-deck", text: "stainingDeck", include: true },
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
  heroLinks: () => {},
};

// actions
const actions = {};

// mutations
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
