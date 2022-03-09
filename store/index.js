export const state = () => ({
  ws_host: "wss://ws3.indodax.com/ws/",
  ws_token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE5NDY2MTg0MTV9.UR1lBM6Eqh0yWz-PVirw1uPCxe60FdchR8eNVdsskeo",
  token: "",
  pairs: localStorage.getItem("pairs")
    ? JSON.parse(localStorage.getItem("pairs"))
    : [],
  gainer_losser: [],
});

export const mutations = {
  SET_TOKEN(state, payload) {
    state.token = payload;
  },
  SET_PAIRS(state, payload) {
    localStorage.setItem("pairs", JSON.stringify(payload));
    state.pairs = payload;
  },
  SET_PAIR(state, payload) {
    var where_pair = payload[0]; // pair yg akan diupdate
    var update = payload[1]; // field yg akan diupdate
    var index = state.pairs.findIndex(
      (x) => x[where_pair[0]] === where_pair[1]
    );
    if (index >= 0) {
      state.pairs[index][update[0]] = update[1];
    }
  },
  SET_GAINER_LOSSER(state, payload) {
    state.gainer_losser = payload;
  },
};
