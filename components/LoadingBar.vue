<template>
  <div v-if="loading" class="loading-page">
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      console.log("masuk");
      this.loading = true;
    },
    finish() {
      console.log("selesai");
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
}
</style>
