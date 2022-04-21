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
  max-width: 1800px;
  min-width: (420 * 3) px;
  margin: 0 auto;
}

.margin-top-percent {
  margin-top: 50%;
}

.margin-left-percent {
  margin-left: 10%;
}
</style>
