<template>
  <div class="card" :class="{ 'rotated-card': rotatedCard }">
    <FrontSide
      :location="location"
      :current="current"
      :imgSrc="imgSrc"
      :city="city"
      @rotate="rotateCard"
      @deleteWeatherCard="deleteWeatherCard"
    />
    <BackSide
      :location="location"
      :selectedDay="selectedDay"
      :dayIndex="dayIndex"
      :selectedWeather="selectedWeather"
      :selectedWeatherIndex="selectedWeatherIndex"
      :possibleDays="possibleDays"
      :city="city"
      @rotate="rotateCard"
      @deleteWeatherCard="deleteWeatherCard"
      @selectDay="selectDay"
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
  props: ["city"],
  emits: ["deleteWeatherCard"],
  components: {
    FrontSide,
    BackSide,
  },

  data() {
    return {
      current: {
        condition: {
          text: {},
        },
      },
      location: {},
      forecast: {
        forecastday: [],
      },
      possibleDays: [
        { name: "Tomorrow", num: 1 },
        { name: "Today", num: 0 },
        { name: "After Tomorrow", num: 2 },
      ],
      dayIndex: 0,
      selectedDay: {
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
    dayIndex() {
      this.selectedDay = this.forecast.forecastday[this.dayIndex];
      this.selectedWeather = this.selectedDay.hour[this.selectedWeatherIndex];
    },

    selectedWeatherIndex(newValue) {
      this.selectedWeather = this.selectedDay.hour[newValue];
      this.loopWeatherIndex();
    },
  },

  methods: {
    async fetchWeather() {
      const response = await fetch(
        `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${this.city.cityName}&days=3`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
            "x-rapidapi-key": API_KEY,
          },
        }
      );

      const result = await response.json();
      this.current = result.current;
      this.location = result.location;
      this.forecast = result.forecast;
      this.selectedDay = this.forecast.forecastday[this.dayIndex];
      this.selectedWeather = this.selectedDay.hour[this.selectedWeatherIndex];
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

    deleteWeatherCard(index) {
      this.$emit("deleteWeatherCard", index);
    },

    selectDay(idx) {
      this.dayIndex = this.possibleDays[idx].num;
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
