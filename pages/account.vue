<template>
  <div>
    <div
      :class="isNative ? 'pt-10' : 'pt-3'"
      class="px-3 md:px-0 bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300"
    >
      <p class="text-lg text-center font-bold mb-2">{{ $t("Settings") }}</p>

      <div class="text-center">
        <button class="bg-white dark:bg-gray-700 p-2 ml-1 mr-1 rounded-full">
          <GlobeIcon class="my-auto text-gray-400" />
        </button>
        <button class="bg-white dark:bg-gray-700 p-2 ml-1 mr-1 rounded-full">
          <FacebookIcon class="my-auto text-gray-400" />
        </button>
        <button class="bg-white dark:bg-gray-700 p-2 ml-1 mr-1 rounded-full">
          <InstagramIcon class="my-auto text-gray-400" />
        </button>
      </div>

      <div
        class="side-in bg-white dark:bg-gray-700 rounded mt-5 pt-2 pb-2 border dark:border-gray-600"
      >
        <p class="text-base text-center font-bold mt-3">
          annurkhozin@gmail.com
        </p>
        <div
          class="flex cursor-pointer border-b dark:border-gray-600 px-2 py-3"
        >
          <span class="flex-auto my-auto px-2"
            >{{ $t("Current_Plan") }}<br />
            <span>{{ $t("Active_until") }} 20 Jan 2022 05:03</span></span
          >
          <ChevronRightIcon class="my-auto text-gray-400 w-4 h-4" />
        </div>

        <div class="flex cursor-pointer px-2 mt-3 py-3">
          <UserIcon class="my-auto text-gray-400" />
          <span class="flex-auto my-auto px-2">{{
            $t("Account_Setting")
          }}</span>
          <ChevronRightIcon class="my-auto text-gray-400 w-4 h-4" />
        </div>

        <div class="flex px-2 py-3">
          <SunIcon class="my-auto text-gray-400" />
          <span class="flex-auto my-auto px-2">{{ $t("Appearance") }}</span>
          <ul class="flex pl-0 ml-2 mr-2 list-none rounded">
            <li
              class="relative cursor-pointer py-1 px-3 leading-tight border border-gray-200 dark:border-gray-500 border-r-0 ml-0 rounded-l hover:bg-gray-300 dark-hover:bg-gray-800"
              :class="theme == 'light' ? 'bg-gray-300 dark:bg-gray-800' : ''"
              @click="setTheme('light')"
            >
              {{ $t("Light") }}
            </li>
            <li
              class="relative cursor-pointer py-1 px-3 leading-tight border border-gray-200 dark:border-gray-500 border-r-0 hover:bg-gray-300 dark-hover:bg-gray-800"
              :class="theme == 'dark' ? 'bg-gray-300 dark:bg-gray-800' : ''"
              @click="setTheme('dark')"
            >
              {{ $t("Dark") }}
            </li>
            <li
              class="relative cursor-pointer py-1 px-3 leading-tight border border-gray-200 dark:border-gray-500 rounded-r hover:bg-gray-300 dark-hover:bg-gray-800"
              :class="theme == 'system' ? 'bg-gray-300 dark:bg-gray-800' : ''"
              @click="setTheme('system')"
            >
              {{ $t("System") }}
            </li>
          </ul>
        </div>

        <div class="flex px-2 py-3">
          <TranslateIcon class="my-auto text-gray-400" />
          <span class="flex-auto my-auto px-2">{{ $t("Language") }}</span>
          <div class="inline-block cursor-pointer group">
            <div class="flex items-center">
              <span class="flex-auto my-auto px-2">{{
                $i18n.localeProperties.name
              }}</span>
              <span>
                <ChevronRightIcon
                  class="my-auto text-gray-400 transform group-hover:rotate-90 transition duration-150 ease-in-out w-4 h-4"
                />
              </span>
            </div>
            <ul
              class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-500 rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-max"
            >
              <li
                class="cursor-pointer rounded-sm px-3 py-2 hover:bg-gray-100 dark-hover:bg-gray-500"
                v-for="locale in availableLocales"
                :key="locale.code"
                @click.prevent.stop="$i18n.setLocale(locale.code)"
              >
                {{ locale.name }}
              </li>
            </ul>
          </div>
        </div>

        <div class="flex cursor-pointer px-2 py-3">
          <GiftIcon class="my-auto text-gray-400" />
          <span class="flex-auto my-auto px-2">{{
            $t("Referral_Program")
          }}</span>
          <ChevronRightIcon class="my-auto text-gray-400 w-4 h-4" />
        </div>
      </div>

      <div
        class="side-in bg-white dark:bg-gray-700 rounded pt-1 pb-2 mt-3 border dark:border-gray-600"
      >
        <div
          class="flex cursor-pointer px-2 mt-2 pt-2 pb-3 border-b dark:border-gray-600"
        >
          <SupportIcon class="my-auto text-gray-400" />
          <span class="flex-auto my-auto px-2">{{ $t("Support") }}</span>
          <ChevronRightIcon class="my-auto text-gray-400 w-4 h-4" />
        </div>
        <div class="flex cursor-pointer px-2 mt-2 py-2">
          <QuestionCicleIcon class="my-auto text-gray-400" />
          <span class="flex-auto my-auto px-2">{{ $t("FAQ") }}</span>
          <ChevronRightIcon class="my-auto text-gray-400 w-4 h-4" />
        </div>
      </div>

      <div class="text-center">
        <button class="btn-danger mt-4 flex inline-flex">
          <LogoutIcon class="mr-1" /> {{ $t("LogOut") }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
li > ul {
  transform: translatex(100%) scale(0);
}
li:hover > ul {
  transform: translatex(101%) scale(1);
}
li > button svg {
  transform: rotate(-90deg);
}
li:hover > button svg {
  transform: rotate(-270deg);
}

.group:hover .group-hover\:scale-100 {
  transform: scale(1);
}
.group:hover .group-hover\:rotate-90 {
  transform: rotate(90deg);
}
.scale-0 {
  transform: scale(0);
}
</style>
<script>
import GlobeIcon from "~/assets/icons/globe.svg?inline";
import FacebookIcon from "~/assets/icons/facebook.svg?inline";
import InstagramIcon from "~/assets/icons/instagram.svg?inline";
import ChevronRightIcon from "~/assets/icons/chevron-right.svg?inline";
import UserIcon from "~/assets/icons/user.svg?inline";
import TranslateIcon from "~/assets/icons/translate.svg?inline";
import SunIcon from "~/assets/icons/sun.svg?inline";
import GiftIcon from "~/assets/icons/gift.svg?inline";
import SupportIcon from "~/assets/icons/support.svg?inline";
import QuestionCicleIcon from "~/assets/icons/question-cicle.svg?inline";
import LogoutIcon from "~/assets/icons/logout.svg?inline";

export default {
  name: "IndexPage",
  components: {
    GlobeIcon,
    FacebookIcon,
    InstagramIcon,
    ChevronRightIcon,
    UserIcon,
    TranslateIcon,
    SunIcon,
    GiftIcon,
    QuestionCicleIcon,
    SupportIcon,
    LogoutIcon,
  },
  data() {
    return {
      isNative: Capacitor.isNative,
      theme: "",
    };
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
  mounted() {
    var theme = window.localStorage.getItem("theme");
    this.theme = theme ? theme : "system";
    this.$colorMode.preference = this.$colorMode.value
      ? this.$colorMode.value
      : "dark";
  },
  methods: {
    setTheme(theme) {
      window.localStorage.setItem("theme", theme);
      this.theme = theme;
      this.$colorMode.preference = theme;
    },
    setLanguage() {
      window.location.reload(true);
    },
    onRefresh: function () {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve();
        }, 1000);
      });
    },
  },
};
</script>
