<template>
  <div>
    <div
      class="relative max-h-screen h-screen overflow-y-auto scrollbar-hide text-sm select-none bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300"
    >
      <status-bar v-if="isNative" />
      <!-- class="max-w-screen-md px-3 md:px-0 pb-20 mx-auto" -->
      <div class="max-w-screen-md pb-20 mx-auto">
        <Nuxt />
      </div>
      <BottomNav />
    </div>
  </div>
</template>
<script>
import { App as CapacitorApp } from "@capacitor/app";
import { StatusBar, Style } from "@capacitor/status-bar";
import { mapMutations } from "vuex";

export default {
  name: "DefaultLayout",
  data() {
    return {
      isNative: Capacitor.isNative,
    };
  },
  created() {
    if (Capacitor.isNative) {
      StatusBar.setOverlaysWebView({ overlay: true });
      StatusBar.setStyle({ style: Style.Dark });
    }
    this.getPairs();
  },
  methods: {
    ...mapMutations(["SET_PAIRS"]),
    async getPairs() {
      const pairData = await this.$axios.$get("https://indodax.com/api/pairs");
      const summariesData = await this.$axios.$get(
        "https://indodax.com/api/summaries"
      );
      const tickers = summariesData.tickers;
      Object.keys(tickers).forEach(function (key) {
        var index = pairData.findIndex((x) => x.ticker_id === key);
        if (index >= 0) {
          var mergeData = { ...pairData[index], ...tickers[key] };
          pairData[index] = mergeData;
        }
      });

      const prices_24h = summariesData.prices_24h;
      Object.keys(prices_24h).forEach(function (key) {
        var index = pairData.findIndex((x) => x.id === key);
        if (index >= 0) {
          var lastPrice = pairData[index].last;
          const newData = {
            prices_24h: prices_24h[key],
            change_24: (
              (100 * (parseFloat(lastPrice) - parseFloat(prices_24h[key]))) /
              parseFloat(prices_24h[key])
            ).toFixed(2),
          };
          var mergeData = { ...pairData[index], ...newData };
          pairData[index] = mergeData;
        }
      });

      this.SET_PAIRS(pairData);

      // console.log(pairData);
      // console.log(
      // this.$store.state.pairs.find((x) => x.ticker_id === "btc_idr")
      // this.$store.state.pairs.findIndex((x) => x.ticker_id === "btc_idr")
      // );
    },
  },
  watch: {
    async $route(to, from) {
      if (Capacitor.isNative) {
        if (to.path == "/" || (from.path == "/home" && to.path == "/started")) {
          CapacitorApp.exitApp();
        }
      }
    },
  },
};
</script>
