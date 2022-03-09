<template>
  <div
    class="w-screen-md h-screen bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300"
  >
    <div class="max-w-screen-md h-full mx-auto">
      <div
        class="fixed right-5 cursor-pointer p-2 mt-10 bg-yellow-300 dark:bg-gray-900 rounded-full"
        @click="changeTheme"
      >
        <SunIcon v-if="$colorMode.value == 'light'" class="w-5 h-5" />
        <MoonIcon v-if="$colorMode.value == 'dark'" class="w-5 h-5" />
      </div>

      <div class="flex flex-col h-full">
        <div class="text-center mt-auto mx-auto w-3/4 md:w-1/2">
          <img src="~/static/started.png" alt="SportPedia" class="mx-auto" />
        </div>
        <div class="px-6 pt-3">
          <h1 class="font-bold mt-3 text-2xl">Welcome to INLAB</h1>
          <P class="text-base"
            >Platform belajar investasi dan jual beli (marketplace) aset kripto
            di Indonesia</P
          >
          <button class="btn-primary w-full my-8 font-bold" @click="toHome">
            LANJUT
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SunIcon from "~/assets/icons/sun.svg?inline";
import MoonIcon from "~/assets/icons/moon.svg?inline";

export default {
  name: "StartedPage",
  layout: "blank",
  data() {
    return {};
  },
  components: { SunIcon, MoonIcon },
  methods: {
    async toHome() {
      localStorage.setItem("startedPage", true);
      this.$router.replace("home");
    },
    changeTheme() {
      var theme = this.$colorMode.value == "dark" ? "light" : "dark";
      this.$colorMode.preference = theme;
    },
  },
};
</script>
