<template>
  <div :class="isNative ? 'pt-10' : 'pt-3'" class="px-3 md:px-0">
    <p class="text-lg text-center font-bold mb-2">Connect Indodax Account</p>

    <div class="mt-6 side-in">
      <div
        class="flex items-center w-full bg-green-100 dark:bg-green-900 rounded mb-6 border border-green-300 dark:border-green-600 text-green-800 dark:text-green-300 overflow-hidden mx-auto"
      >
        <div class="w-10 border-r border-green-300 dark:border-green-600 p-2">
          <InfoIcon class="h-6 w-6" />
        </div>

        <div class="flex items-center p-2">
          <p>{{ $t("info_scan") }}</p>
        </div>
      </div>

      <div class="mb-6">
        <div class="flex">
          <div class="grid grid-cols w-screen">
            <label for="api_key" class="font-medium block mb-2">API KEY</label>
            <input
              type="text"
              id="api_key"
              autocomplete="off"
              v-model="api_key"
              class="flex-auto placeholder:text-slate-400 block bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2 focus:outline-none focus:border-green-500 focus:ring-green-500 focus:ring-1"
            />
          </div>
          <div class="grid grid-cols text-center">
            <label class="font-medium block mb-2 ml-2">SCAN</label>
            <nuxt-link to="qrcode" class="btn-blue ml-2">
              <QrCodeIcon />
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="mb-6">
        <label for="secret_key" class="font-medium block mb-2"
          >Secret KEY</label
        >
        <div class="flex">
          <input
            type="text"
            id="secret_key"
            autocomplete="off"
            v-model="api_key"
            class="flex-auto placeholder:text-slate-400 block bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2 focus:outline-none focus:border-green-500 focus:ring-green-500 focus:ring-1"
          />
        </div>
      </div>

      <div class="text-center mb-3">
        <button class="btn-primary flex inline-flex" @click="connectIndodax">
          <StatusOnlineIcon class="mr-1" /> Connect
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import StatusOnlineIcon from "~/assets/icons/status-online.svg?inline";
import QrCodeIcon from "~/assets/icons/qrcode.svg?inline";
import InfoIcon from "~/assets/icons/info.svg?inline";

export default {
  name: "PortfolioPage",
  data() {
    return {
      isNative: Capacitor.isNative,
      api_key: "",
      secret_key: "",
    };
  },
  components: {
    StatusOnlineIcon,
    QrCodeIcon,
    InfoIcon,
  },
  mounted() {
    var api_key = window.localStorage.getItem("api_key");
    var secret_key = window.localStorage.getItem("secret_key");
    this.api_key = api_key;
    this.secret_key = secret_key;
  },
  methods: {
    async connectIndodax() {
      if (!this.api_key) {
        this.$toast.show(this.$t("api_key_required"));
      } else if (!this.secret_key) {
        this.$toast.show(this.$t("secret_key_required"));
      } else {
        // const pairs = await this.$axios.$post("https://indodax.com/tapi",{
        // });
      }
    },
  },
};
</script>
