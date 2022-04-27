<template>
  <div class="card" :class="{ 'rotated-card': rotatedCard }">
    <FrontSide
      :location="location"
      :current="current"
      :imgSrc="imgSrc"
      @rotate="rotateCard"
    />
    <BackSide
      :location="location"
      :selectedWeather="selectedWeather"
      :selectedWeatherIndex="selectedWeatherIndex"
      :dayInfo="dayInfo"
      @rotate="rotateCard"
      @decreseWeatherIndex="decreseWeatherIndex"
      @increaseWeatherIndex="increaseWeatherIndex"
    />
  </div>
</template>

<script>
import { API_KEY } from "@/config";
import FrontSide from "./front-side-component/frontside-card.vue";
import BackSide from "./backside-component/backside-card.vue";
import weatherImgObject from "@/weatherImgObject.js";

export default {
  name: "WeatherCard",
  props: ["cities"],
  components: {
    FrontSide,
    BackSide,
  },

  data() {
    return {
      current: {
        condition: {},
      },
      location: {},
      forecast: {},
      dayInfo: {
        day: {},
        astro: {},
        hour: [],
      },
      errors: [],
      rotatedCard: false,
      selectedWeather: {},
      selectedWeatherIndex: 14,
      imgSrc: "",
    };
  },

  watch: {
    selectedWeatherIndex(newValue) {
      this.selectedWeather = this.dayInfo.hour[newValue];
      this.loopWeatherIndex(); // why it's working ?
    },
  },

  methods: {
    async fetchWeather() {
      const response = await fetch(
        `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${this.cities[0]}&days=3`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
            "x-rapidapi-key": API_KEY,
          },
        }
      );
      const result = await response.json();
      console.log(result);
      this.current = result.current;
      this.location = result.location;
      this.dayInfo = result.forecast.forecastday[0];
      this.selectedWeather = this.dayInfo.hour[this.selectedWeatherIndex];
      this.imgSrc =
        weatherImgObject.map[this.current.condition.text] ??
        weatherImgObject.defaultSrc;
    },

    fetchWeatherError() {
      this.errors.push(this.error); // make sense ???
    },

    increaseWeatherIndex() {
      this.selectedWeatherIndex++;
    },

    decreseWeatherIndex() {
      this.selectedWeatherIndex--;
    },

    loopWeatherIndex() {
      if (this.selectedWeatherIndex > 23) this.selectedWeatherIndex = 0;
      if (this.selectedWeatherIndex < 0) this.selectedWeatherIndex = 23;
    },

    rotateCard() {
      this.rotatedCard = !this.rotatedCard;
    },
  },

  mounted() {
    try {
      this.fetchWeather();
    } catch (error) {
      this.fetchWeatherError();
    }
  },
};
</script>

<style lang="scss">
.card {
  position: relative;
  perspective: 1000px;
}
</style>
