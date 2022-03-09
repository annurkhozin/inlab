<template>
  <div class="min-h-screen">
    <status-bar v-if="isNative" />
    <Nuxt />
  </div>
</template>
<script>
export default {
  name: "BlankLayout",
  data() {
    return {
      isNative: Capacitor.isNative,
    };
  },
};
</script>
