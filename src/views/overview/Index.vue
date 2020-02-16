<template>
  <div>
    <h1>Overview</h1>
    <apexchart
      width="500"
      type="line"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>

<script lang="ts">
import VueApexCharts from "vue-apexcharts";
import { Vue, Component } from "vue-property-decorator";

Vue.component("apexchart", VueApexCharts);

@Component
export default class Overview extends Vue {
  private options: any = {
    chart: {
      id: "vuechart-example"
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
    }
  };

  private series: any = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
  ];
}
</script>

<style lang="scss" scoped></style>
