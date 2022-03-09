<template>
  <div :class="isNative ? 'pt-10' : 'pt-3'" class="px-3 md:px-0">
    <div class="max-w-screen-sm mx-auto flex items-center justify-between pb-2">
      <p class="text-lg font-semibold mr-auto">INLAB</p>

      <div
        v-if="isNative"
        @click="shareApp"
        class="dark:bg-gray-900 rounded-lg cursor-pointer p-2 mr-1"
      >
        <ShareIcon class="w-5 h-5" />
      </div>
      <div
        @click="searchForm"
        class="dark:bg-gray-900 rounded-lg cursor-pointer p-2 mr-1"
      >
        <SearchIcon class="w-5 h-5" />
      </div>
      <div class="dark:bg-gray-900 rounded-lg cursor-pointer p-2">
        <BellIcon class="w-5 h-5" />
      </div>
    </div>

    <div
      v-show="searchBox"
      class="z-20 h-screen w-full fixed left-0 top-0 flex bg-black bg-opacity-70"
    >
      <div class="w-screen max-w-screen-sm mx-auto mt-7">
        <div
          class="rounded-lg bg-white dark:bg-gray-700 shadow-lg my-3 mx-3 pt-3"
        >
          <div
            class="border-b dark:border-gray-600 rounded-t-lg flex items-center h-10 overflow-hidden pb-2"
          >
            <div
              class="ml-3 mr-1 grid place-items-center h-full w-10 text-gray-300"
            >
              <SearchIcon class="w-5 h-5" />
            </div>

            <input
              class="peer h-full w-full outline-none pr-2 text-base dark:bg-gray-700"
              type="search"
              ref="search_data"
              v-model="search_data"
              autocomplete="off"
              placeholder="Bitcoin, ETH, etc ..."
            />
            <p
              class="px-3 text-red-500 font-bold cursor-pointer"
              @click="searchBox = false"
            >
              BATAL
            </p>
          </div>
          <!-- modal body -->
          <div class="p-2">
            <div
              class="flex justify-start cursor-pointer hover:text-blue-400 hover:bg-blue-100 dark-hover:bg-gray-600 rounded-md px-1 py-2 my-2 px-2"
            >
              <div class="flex-grow font-medium">Bitcoin</div>
              <div class="text-sm font-normal text-green-500">1.4%</div>
            </div>
            <div
              class="flex justify-start cursor-pointer hover:text-blue-400 hover:bg-blue-100 dark-hover:bg-gray-600 rounded-md px-1 py-2 my-2 px-2"
            >
              <div class="flex-grow font-medium">Ethereum</div>
              <div class="text-sm font-normal text-red-500">-0.1%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300 py-6"
    >
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div
          class="flex p-2 bg-white dark:bg-gray-700 rounded-lg shadow-xs border border-blue-300 dark:border-blue-800 cursor-pointer"
        >
          <div
            class="m-auto p-2 mr-3 flex items-center text-orange-500 bg-green-100 dark:bg-green-800 rounded-full"
          >
            <AppIndicatorIcon class="h-5 w-5" />
          </div>
          <div class="w-full flex items-center">
            <p class="text-tiny font-semibold">Price Alert</p>
          </div>
        </div>

        <div
          class="flex p-2 bg-white dark:bg-gray-700 rounded-lg shadow-xs border border-blue-300 dark:border-blue-800 cursor-pointer"
        >
          <div
            class="m-auto p-2 mr-3 flex items-center text-orange-500 bg-green-100 dark:bg-green-800 rounded-full"
          >
            <CompareIcon class="h-5 w-5" />
          </div>
          <div class="w-full flex items-center">
            <p class="text-tiny font-semibold">Compare</p>
          </div>
        </div>

        <div
          class="flex p-2 bg-white dark:bg-gray-700 rounded-lg shadow-xs border border-blue-300 dark:border-blue-800 cursor-pointer"
        >
          <div
            class="m-auto p-2 mr-3 flex items-center text-orange-500 bg-green-100 dark:bg-green-800 rounded-full"
          >
            <SwictHorizontalIcon class="h-5 w-5" />
          </div>
          <div class="w-full flex items-center">
            <p class="text-tiny font-semibold">Converter</p>
          </div>
        </div>

        <div
          class="flex p-2 bg-white dark:bg-gray-700 rounded-lg shadow-xs border border-blue-300 dark:border-blue-800 cursor-pointer"
        >
          <div
            class="m-auto p-2 mr-3 flex items-center text-orange-500 bg-green-100 dark:bg-green-800 rounded-full"
          >
            <EyeIcon class="h-5 w-5" />
          </div>
          <div class="w-full flex items-center">
            <p class="text-tiny font-semibold">Watchlist</p>
          </div>
        </div>
      </div>
    </div>

    <div class="side-in">
      <div class="flex flex-col m-auto p-auto">
        <div class="flex pt-5">
          <h1 class="font-bold text-lg mr-auto">Top 10 Coins</h1>
          <nuxt-link
            to="/outlet"
            class="font-medium text-green-700 dark:text-green-500 pl-2 flex inline-flex"
            >Lainnya <ChevronRightIcon
          /></nuxt-link>
        </div>
        <div class="flex overflow-x-auto pb-2 pt-3 scrollbar-hide">
          <div class="flex flex-nowrap">
            <nuxt-link
              v-for="(row, index) in topCoins"
              :key="index"
              :to="'market/' + row.id"
              class="inline-block pr-3"
            >
              <div
                class="p-2 w-32 bg-white dark:bg-gray-700 rounded-lg shadow-xs border border-gray-300 dark:border-gray-500 cursor-pointer"
              >
                <div class="flex items-center">
                  <img
                    :data-src="row.url_logo"
                    :alt="row.description"
                    :title="row.description"
                    v-lazy-load
                    class="w-8 h-8"
                  />
                  <div class="ml-2">
                    <p class="text-tiny font-semibold truncate">
                      {{ row.description }}
                    </p>
                  </div>
                </div>
                <div class="mt-2">
                  <p class="font-semibold truncate">{{ row.name }}</p>
                  <p class="">
                    {{ row.base_currency == "idr" ? "Rp " : "$" }}
                    {{ parseFloat(row.last).toLocaleString("id-ID") }}
                  </p>
                  <div
                    :class="
                      row.change_24 < 0
                        ? 'text-red-500'
                        : row.change_24 > 0
                        ? 'text-green-500'
                        : ''
                    "
                    class="flex inline-flex items-center text-tiny font-semibold"
                  >
                    <template v-if="row.change_24 < 0">
                      <CaretDownIcon class="h-4 w-4" />
                    </template>
                    <template v-else>
                      <CaretUpIcon class="h-4 w-4" />
                    </template>
                    {{ parseFloat(row.change_24).toLocaleString("id-ID") }}%
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div class="side-in">
      <div class="flex flex-col m-auto p-auto">
        <div class="flex pt-5">
          <h1 class="font-bold text-lg mr-auto">Gainers & Losers</h1>
          <nuxt-link
            to="/outlet"
            class="font-medium text-green-700 dark:text-green-500 pl-2 flex inline-flex"
            >Lainnya <ChevronRightIcon
          /></nuxt-link>
        </div>
        <span class="text-xs">Based on Top {{ pairs.length }} Coins</span>
        <div class="flex overflow-x-auto pb-2 pt-3 scrollbar-hide">
          <div class="flex flex-nowrap">
            <div
              v-for="(row, index) in gainerLosser"
              :key="index"
              class="inline-block pr-3"
            >
              <div
                class="p-2 w-32 bg-white dark:bg-gray-700 rounded-lg shadow-xs border border-gray-300 dark:border-gray-500 cursor-pointer"
              >
                <div class="flex items-center">
                  <img
                    :data-src="row.url_logo"
                    :alt="row.description"
                    :title="row.description"
                    v-lazy-load
                    class="w-8 h-8"
                  />
                  <div class="ml-2">
                    <p class="text-tiny font-semibold truncate">
                      {{ row.description }}
                    </p>
                  </div>
                </div>
                <div class="mt-2">
                  <p class="font-semibold truncate">{{ row.name }}</p>
                  <p class="">
                    {{ row.base_currency == "idr" ? "Rp " : "$" }}
                    {{ parseFloat(row.last).toLocaleString("id-ID") }}
                  </p>
                  <div
                    :class="
                      row.change_24 < 0
                        ? 'text-red-500'
                        : row.change_24 > 0
                        ? 'text-green-500'
                        : ''
                    "
                    class="flex inline-flex items-center text-tiny font-semibold"
                  >
                    <template v-if="row.change_24 < 0">
                      <CaretDownIcon class="h-4 w-4" />
                    </template>
                    <template v-else>
                      <CaretUpIcon class="h-4 w-4" />
                    </template>
                    {{ parseFloat(row.change_24).toLocaleString("id-ID") }}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Share } from "@capacitor/share";
import Centrifuge from "centrifuge";
import { mapMutations } from "vuex";

import AppIndicatorIcon from "~/assets/icons/app-indicator.svg?inline";
import CompareIcon from "~/assets/icons/compare.svg?inline";
import SwictHorizontalIcon from "~/assets/icons/switch-horizontal.svg?inline";
import EyeIcon from "~/assets/icons/eye.svg?inline";
import ShareIcon from "~/assets/icons/share.svg?inline";
import SearchIcon from "~/assets/icons/search.svg?inline";
import BellIcon from "~/assets/icons/bell.svg?inline";
import ChevronRightIcon from "~/assets/icons/chevron-right.svg?inline";
import CaretUpIcon from "~/assets/icons/caret-up.svg?inline";
import CaretDownIcon from "~/assets/icons/caret-down.svg?inline";

export default {
  name: "HomePage",
  components: {
    AppIndicatorIcon,
    CompareIcon,
    SwictHorizontalIcon,
    EyeIcon,
    ShareIcon,
    SearchIcon,
    BellIcon,
    ChevronRightIcon,
    CaretUpIcon,
    CaretDownIcon,
  },
  data() {
    return {
      isNative: Capacitor.isNative,
      loadingData: false,
      searchBox: false,
      search_data: "",
      indodax: new Centrifuge(this.$store.state.ws_host),
      pairs: this.$store.state.pairs,
      gainerLosser: [],
      topCoins: [],
    };
  },
  mounted() {
    this.pairs = this.$store.state.pairs;
    this.gainerLosser = localStorage.getItem("gainerLosser")
      ? JSON.parse(localStorage.getItem("gainerLosser"))
      : [];
    this.topCoins = localStorage.getItem("topCoins")
      ? JSON.parse(localStorage.getItem("topCoins"))
      : [];
    this.$refs.search_data.focus();

    this.indodax.setToken(this.$store.state.ws_token);
    var _this = this;
    this.indodax.subscribe("market:summary-24h", function (resp) {
      var data = resp.data[0];
      _this.setPair(data);
    });
    this.indodax.connect();
  },
  methods: {
    ...mapMutations(["SET_PAIR", "SET_GAINER_LOSSER"]),
    async setPair(data) {
      var change_24 = (
        (100 * (parseFloat(data[2]) - parseFloat(data[5]))) /
        parseFloat(data[5])
      ).toFixed(2);

      this.SET_PAIR([
        ["id", data[0]],
        ["last", data[2]],
      ]);

      this.SET_PAIR([
        ["id", data[0]],
        ["low", data[3]],
      ]);

      this.SET_PAIR([
        ["id", data[0]],
        ["hight", data[4]],
      ]);

      this.SET_PAIR([
        ["id", data[0]],
        ["prices_24h", data[5]],
      ]);

      this.SET_PAIR([
        ["id", data[0]],
        ["change_24", change_24],
      ]);

      var pairs = [...this.pairs];
      pairs.sort((a, b) =>
        parseFloat(a.change_24) < parseFloat(b.change_24) ? 1 : -1
      );
      this.gainerLosser = [
        ...pairs.slice(0, 5),
        ...pairs.slice(pairs.length - 6, pairs.length - 1),
      ];

      localStorage.setItem("gainerLosser", JSON.stringify(this.gainerLosser));

      this.topCoins = [...this.pairs.slice(0, 9)];
      localStorage.setItem("topCoins", JSON.stringify(this.topCoins));
    },

    // async getGainerLosser(arr) {
    //   // return arr.sort(
    //   //   (a, b) => parseFloat(a.change_24) - parseFloat(b.change_24)
    //   // );
    //   return parseFloat(arr.change_24) > 0 ? arr : false;
    // },

    searchForm() {
      this.searchBox = true;
      this.$nextTick(() => this.$refs.search_data.focus());
    },
    async shareApp() {
      await Share.share({
        title: "INLAB",
        text: "Aplikasi edukasi dan jual beli mata uang kripto",
        url: "https://play.google.com/",
        dialogTitle: "Bagikan sekarang",
      });
    },
  },
  watch: {
    "$store.state.pairs": function (value) {
      this.pairs = value;
    },
  },
  beforeRouteLeave(to, from, next) {
    this.indodax.disconnect();
    next();
  },
};
</script>
