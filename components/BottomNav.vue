<template>
  <div
    class="max-w-screen-md fixed bottom-0 md:bottom-2 inset-x-0 md:inset-x-2 mx-auto"
  >
    <div class="w-full mx-auto">
      <div
        class="px-1 bg-white dark:bg-gray-900 md:rounded-lg md:border dark:border-gray-700"
      >
        <div class="flex">
          <div
            class="flex-1 group"
            v-for="(row, index) in bottom_menu"
            :key="index"
          >
            <NuxtLink
              :to="currentLang(row.href)"
              :class="isCurrentPage(row.href) ? 'text-green-500' : ''"
              class="flex items-end justify-center mx-auto px-1 pt-2 w-full text-gray-400 group-hover:text-green-500"
            >
              <span class="block px-1 pt-1 pb-1">
                <div v-html="row.icon" class="flex justify-center" />
                <span class="block text-xs">{{ row.label }}</span>
                <span
                  :class="isCurrentPage(row.href) ? 'w-5 bg-green-500' : ''"
                  class="block w-2 mx-auto h-1 group-hover:bg-green-500 rounded-full"
                ></span>
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeIcon from "~/assets/icons/home.svg?raw";
import BarChartIcon from "~/assets/icons/bar-chart.svg?raw";
import PieChartIcon from "~/assets/icons/pie-chart.svg?raw";
import CompassleIcon from "~/assets/icons/compass.svg?raw";
import UserIcon from "~/assets/icons/user.svg?raw";

export default {
  name: "BottomNav",
  data() {
    return {
      bottom_menu: [
        {
          icon: HomeIcon,
          label: this.$t("Home"),
          href: "home",
        },
        {
          icon: BarChartIcon,
          label: this.$t("Market"),
          href: "market",
        },
        {
          icon: PieChartIcon,
          label: this.$t("Portfolio"),
          href: "portfolio",
        },
        {
          icon: CompassleIcon,
          label: this.$t("Discover"),
          href: "discover",
        },
        {
          icon: UserIcon,
          label: this.$t("Account"),
          href: "account",
        },
      ],
    };
  },
  methods: {
    currentLang(url) {
      return this.$i18n.defaultLocale === this.$i18n.locale
        ? "/" + url
        : "/" + this.$i18n.locale + "/" + url;
    },
    isCurrentPage(page) {
      const path = this.$route.path.split("/");
      if (path.includes(page)) {
        return true;
      } else {
        return false;
      }
    },
  },
  watch: {
    "$i18n.locale": function (to, from) {
      this.bottom_menu[0].label = this.$t("Home");
      this.bottom_menu[1].label = this.$t("Market");
      this.bottom_menu[2].label = this.$t("Portfolio");
      this.bottom_menu[3].label = this.$t("Discover");
      this.bottom_menu[4].label = this.$t("Account");
    },
  },
};
</script>
