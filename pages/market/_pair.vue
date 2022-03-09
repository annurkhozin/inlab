<template>
  <div :class="isNative ? 'pt-10' : 'pt-3'" class="px-1 md:px-0">
    <div class="flex">
      <div class="p-1 bg-white dark:bg-gray-700 rounded-lg shadow-xs mx-auto">
        <ul
          class="flex list-none rounded text-xs border border-gray-200 dark:border-gray-500"
        >
          <li
            v-for="(row, index) in period"
            :key="index"
            class="relative cursor-pointer py-1 px-3 leading-tight rounded"
            :class="
              periodActive == row.key ? 'bg-green-100 dark:bg-gray-800' : ''
            "
            @click="setPeriod(row.key)"
          >
            {{ row.label }}
          </li>
        </ul>
      </div>
    </div>
    <highstock :options="chartOptions" class="mt-3" />
  </div>
</template>

<script>
import Centrifuge from "centrifuge";

export default {
  data() {
    return {
      isNative: Capacitor.isNative,
      indodax: new Centrifuge(this.$store.state.ws_host),
      pair: "btcidr",
      series: [],
      periodActive: "1day",
      period: [
        {
          key: "1day",
          label: "1 Day",
        },
        {
          key: "7day",
          label: "7 Days",
        },
        {
          key: "30day",
          label: "30 Days",
        },
        {
          key: "60day",
          label: "60 Days",
        },
        {
          key: "90day",
          label: "90 Days",
        },
      ],
    };
  },
  computed: {
    chartOptions() {
      return {
        chart: {
          type: "candlestick",
          backgroundColor: "transparent",
          zoomType: "",
        },
        rangeSelector: {
          enabled: false,
        },
        navigator: {
          enabled: false,
        },
        xAxis: {
          labels: {
            style: {
              color: this.$colorMode.value == "dark" ? "#c9c9c9" : "#5c5b5b",
            },
          },
          lineColor: this.$colorMode.value == "dark" ? "#c9c9c9" : "#5c5b5b",
          //   lineColor: "transparent",
        },

        yAxis: {
          labels: {
            align: "right",
            x: -3,
            style: {
              color: this.$colorMode.value == "dark" ? "#c9c9c9" : "#5c5b5b",
            },
          },
          lineWidth: 1,
          resize: {
            enabled: true,
          },
          offset: 40,
          lineColor: this.$colorMode.value == "dark" ? "#c9c9c9" : "#5c5b5b",
          gridLineColor:
            this.$colorMode.value == "dark" ? "#4a4b4a" : "#e3e9e3",
        },
        credits: {
          enabled: false,
        },
        scrollbar: {
          enabled: false,
        },
        exporting: {
          enabled: false,
        },
        // title: {
        //   text: `${this.pair}`,
        // },
        plotOptions: {
          marginRight: 50,
          candlestick: {
            lineColor: this.$colorMode.value == "dark" ? "#C0C0C0" : "#808080",
            color: "#ff0000",
            upColor: "#4eb883",
          },
        },
        series: this.series,
      };
    },
  },
  mounted() {
    this.pair = this.$route.params.pair;
    this.fetchData(this.pair, "1day");

    this.indodax.setToken(this.$store.state.ws_token);
    var _this = this;
    this.indodax.subscribe(`chart:tick-${this.pair}`, function (resp) {
      var entry = resp.data[0];
      // _this.series.push([entry[0] * 1000, entry[2]]);
    });
    this.indodax.connect();
  },
  methods: {
    async setPeriod(periode) {
      this.fetchData(this.pair, periode);
    },
    async fetchData(pair, period) {
      if (pair) {
        this.periodActive = period;
        var tf = 0;
        var day = 0;
        if (period == "1day") {
          tf = 15;
          day = 1;
        } else if (period == "7day") {
          tf = 30;
          day = 7;
        } else if (period == "30day") {
          tf = 240;
          day = 30;
        } else if (period == "60day") {
          tf = "1D";
          day = 60;
        } else {
          tf = "3D";
          day = 90;
        }
        var from = this.$moment().subtract(day, "days").unix();
        var to = this.$moment().unix();
        const price = await fetch(
          `https://indodax.com/tradingview/history_v2?symbol=${pair}&tf=${tf}&from=${from}&to=${to}`
        ).then((r) => r.json());
        const historyData = {
          name: this.pair.toUpperCase(),
          data: price.map((entry) => {
            return [
              entry.Time * 1000,
              entry.Open,
              entry.High,
              entry.Low,
              entry.Close,
            ];
          }),
        };
        this.series = historyData;
      }
    },
  },
  beforeRouteLeave(to, from, next) {
    this.indodax.disconnect();
    next();
  },
};
</script>
