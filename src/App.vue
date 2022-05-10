<template>
  <vHeader />
  <CreateWidgetPopup
    :shownPopup="shownPopup"
    :cities="cities"
    @addWeather="addWeatherHandler"
    @hidePopup="hidePopup"
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
import vHeader from "@/components/v-header.vue";

import { v4 as uuidv4 } from "uuid";

export default {
  name: "App",
  components: {
    WeatherCard,
    AddWeatherCard,
    CreateWidgetPopup,
    vHeader,
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

  created() {
    const sData = localStorage.getItem("weather-list");

    if (sData) {
      this.cities = JSON.parse(sData);
      // this.cities.forEach(() => {
      //   this.fetchWeather();
      // });
    }
  },

  methods: {
    showPopup() {
      this.shownPopup = true;
    },

    hidePopup() {
      this.shownPopup = false;
    },

    addWeatherHandler(city) {
      this.shownPopup = false;
      this.cities.push({ cityName: city, index: uuidv4() });
      localStorage.setItem("weather-list", JSON.stringify(this.cities));
    },

    deleteWeatherCard(index) {
      this.cities = this.cities.filter((t) => t.index !== index);
      localStorage.setItem("weather-list", JSON.stringify(this.cities));
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

.margin-left-percent {
  margin-left: 7%;
}

@media (max-width: 1600px) {
  .grid-cards {
    grid-template-columns: repeat(2, 0.7fr);
    width: 1200px;
  }
}

@media (max-width: 1050px) {
  .grid-cards {
    grid-template-columns: repeat(1, 0.7fr);
    width: 550px;
  }
}

@media (max-width: 650px) {
  .margin-left-percent {
    margin-left: 0;
  }

  .grid-cards {
    width: 474px;
  }
}
</style>
