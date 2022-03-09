<script>
export default {
  name: "IndexPage",
  layout: "DefaultLayout",
  data() {
    return {
      currentLang:
        this.$i18n.defaultLocale === this.$i18n.locale
          ? "/"
          : "/" + this.$i18n.locale + "/",
    };
  },
  created() {
    var startedPage = localStorage.getItem("startedPage");
    startedPage = startedPage == "true" ? true : false;
    if (startedPage) {
      setTimeout(() => {
        this.$router.push(this.currentLang + "home");
      }, 1000);
    } else {
      this.$router.push(this.currentLang + "started");
    }
  },
};
</script>
