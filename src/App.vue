<template>
  <CreateWidgetPopup
    :shownPopup="shownPopup"
    :cities="cities"
    @addWeather="addWeatherHandler"
  />
  <div class="grid-cards cards-wrapper">
    <div v-for="city in cities" :key="city.index" class="margin-left-percent">
      <WeatherCard :city="city" @deleteWeatherCard="deleteWeatherCard" />
    </div>

    <div class="margin-left-percent">
      <AddWeatherCard @showPopup="showPopup" />
    </div>
  </div>
</template>

<script>
import WeatherCard from "@/components/weather-card.vue";
import AddWeatherCard from "@/components/add-weather-card.vue";
import CreateWidgetPopup from "@/components/create-widget-popup.vue";

import { v4 as uuidv4 } from "uuid";

export default {
  name: "App",
  components: {
    WeatherCard,
    AddWeatherCard,
    CreateWidgetPopup,
  },

  data() {
    return {
      cities: [
        { cityName: "Hrodna", index: uuidv4() },
        { cityName: "Kawasaki", index: uuidv4() },
        { cityName: "Nunavut", index: uuidv4() },
        { cityName: "Brazilia", index: uuidv4() },
      ],
      shownPopup: false,
      uuidv4,
    };
  },

  methods: {
    showPopup() {
      this.shownPopup = true;
    },

    addWeatherHandler(city) {
      this.shownPopup = false;
      this.cities.push({ cityName: city, index: uuidv4() });
      console.log(this.cities);
    },

    deleteWeatherCard(index) {
      // this.cities.splice(this.city, 1);
      this.cities = this.cities.filter((t) => t.index !== index);
    },
  },
};
</script>

<style lang="scss">
.grid-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 550px;

  z-index: 0;
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
