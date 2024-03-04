const state = () => ({
  heroLinks: [
    { route: "/", text: "deckStaining" },
    { route: "/painting-deck", text: "paintingDeck" },
    { route: "/wetlook-concrete", text: "wetlookConcrete" },
    { route: "/painting-parking", text: "paintingParking" },
  ],
});

// getters
const getters = {
  baseUrl: () =>
    process.env.NODE_ENV === "production"
      ? "https://dr-deck.ca"
      : "http://localhost:8080/dr-vue",
  heroLinks: (state) => state.heroLinks,
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
