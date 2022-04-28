<template>
  <div class="grid-cards cards-wrapper">
    <div
      v-for="(city, idx) in cities"
      v-bind:key="idx"
      class="margin-left-percent"
    >
      <WeatherCard :cities="cities" :idx="idx" />
    </div>

    <div class="margin-left-percent">
      <AddWeatherCard />
    </div>
  </div>
</template>

<script>
import WeatherCard from "@/components/weather-card.vue";
import AddWeatherCard from "@/components/add-weather-card.vue";

export default {
  name: "App",
  components: {
    WeatherCard,
    AddWeatherCard,
  },

  data() {
    return {
      cities: [
        "Hrodna",
        "Tokio",
        "Nunavut",
        "Canberra",
        "Ankara",
        "New-York",
        "Brazilia",
      ],
    };
  },

  methods: {},
};
</script>

<style lang="scss">
.grid-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 550px;
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
