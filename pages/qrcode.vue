<template>
  <div>
    <div
      class="grid grid-cols-1 grid-rows-1 place-items-center h-screen"
      v-if="!isNative"
    >
      <div class="col-start-1 row-start-1">
        <QrcodeStream @decode="onDecodeQRCode"></QrcodeStream>
      </div>
    </div>
  </div>
</template>
<script>
import { BarcodeScanner } from "@capacitor-community/barcode-scanner";
import { QrcodeStream } from "vue-qrcode-reader";
export default {
  name: "QrCodePage",
  layout: "blank",
  data() {
    return {
      isNative: Capacitor.isNative,
    };
  },
  components: {
    QrcodeStream,
  },
  created() {
    if (Capacitor.isNative) {
      this.didUserGrantPermission();
      this.QrScan();
    }
  },
  methods: {
    onDecodeQRCode(result) {
      var key = result.split("#");
      this.readQrResult(key);
    },
    readQrResult(key) {
      if (key.length > 0) {
        var api_key = key[0];
        var secret_key = key[1];
        localStorage.setItem("api_key", api_key);
        localStorage.setItem("secret_key", secret_key);
      }
      this.$router.go(-1);
    },
    async didUserGrantPermission() {
      // check if user already granted permission
      const status = await BarcodeScanner.checkPermission({ force: false });

      if (status.granted) {
        // user granted permission
        return true;
      }

      if (status.denied) {
        // user denied permission
        return false;
      }

      if (status.asked) {
        // system requested the user for permission during this call
        // only possible when force set to true
      }

      if (status.neverAsked) {
        // user has not been requested this permission before
        // it is advised to show the user some sort of prompt
        // this way you will not waste your only chance to ask for the permission
        const c = confirm(
          "We need your permission to use your camera to be able to scan barcodes"
        );
        if (!c) {
          return false;
        }
      }

      if (status.restricted || status.unknown) {
        // ios only
        // probably means the permission has been denied
        return false;
      }

      // user has not denied permission
      // but the user also has not yet granted the permission
      // so request it
      const statusRequest = await BarcodeScanner.checkPermission({
        force: true,
      });

      if (statusRequest.asked) {
        // system requested the user for permission during this call
        // only possible when force set to true
      }

      if (statusRequest.granted) {
        // the user did grant the permission now
        return true;
      }

      // user did not grant the permission, so he must have declined the request
      return false;
    },
    async QrScan() {
      BarcodeScanner.prepare();
      BarcodeScanner.hideBackground();
      const result = await BarcodeScanner.startScan();
      if (result.hasContent) {
        var key = result.content.split("#");
        this.readQrResult(key);
      }
    },
    stopScan() {
      BarcodeScanner.showBackground();
      BarcodeScanner.stopScan();
    },
  },

  deactivated() {
    this.stopScan();
  },

  beforeDestroy() {
    this.stopScan();
  },
};
</script>
