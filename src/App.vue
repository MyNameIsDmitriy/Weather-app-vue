<template>
  <div class="grid-cards cards-wrapper">
    <div class="margin-top-percent margin-left-percent"><WeatherCard /></div>
    <div class="margin-left-percent"><WeatherCard /></div>
    <div class="margin-top-percent margin-left-percent"><WeatherCard /></div>
  </div>
</template>

<script>
import WeatherCard from "@/components/weather-card.vue";

export default {
  name: "App",
  components: {
    WeatherCard,
  },
};
</script>

<style lang="scss">
.grid-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.cards-wrapper {
  max-width: 95%;
  min-width: (420 * 3) px;
  margin: 1% auto;
}

.margin-top-percent {
  margin-top: 35%;
}

.margin-left-percent {
  margin-left: 7%;
}
</style>
