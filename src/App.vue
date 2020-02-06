<template>
  <div id="app">
    <ScrollingDateComponent />
  </div>
</template>

<script>
import ScrollingDateComponent from "./components/ScrollingDateComponent.vue";

export default {
  name: "app",
  components: {
    ScrollingDateComponent
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
