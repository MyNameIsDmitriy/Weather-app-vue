<template>
  <div class="card" :class="{ 'rotated-card': rotatedCard }">
    <div class="block-front-side">
      <div class="block__header">
        <div class="city">
          <p class="city__name">{{ location.name }}</p>
        </div>
        <p class="time">{{ location.localtime }}</p>
      </div>
      <div class="block__main">
        <img
          src="./assets/svg/clear-day.svg"
          width="250"
          height="250"
          alt="weather-status"
        />
        <p class="weather-status">{{ current.condition.text }}</p>
      </div>
      <div class="block__footer">
        <div class="params">
          <p class="wind-speed">{{ current.wind_kph }} km/h</p>
          <p class="humidity">{{ current.humidity }}%</p>
        </div>
        <div class="double-button">
          <div class="double-button__delete">
            <p>delete</p>
          </div>
          <div @click="rotateCard" class="double-button__rotate">
            <img
              class="rotate-img"
              src="./assets/svg/rotate-button.png"
              alt="rotate image"
            />
          </div>
        </div>
        <p class="temp">{{ current.temp_c }}°C</p>
      </div>
    </div>

    <div class="block-backside">
      <div class="block-backside__main">
        <p class="display-center">
          Timezone: {{ location.country }} ({{ location.tz_id }})
        </p>
        <p class="display-center">City: {{ location.name }}</p>

        <div class="set-hour-button">
          <p class="set-time-margin">Set time:</p>
          <div class="set-buttons">
            <div @click="decreseWeatherIndex" class="minus-button">
              <p>-</p>
            </div>
            <div class="hour-viewier">
              <p>{{ selectedWeatherIndex }}</p>
            </div>
            <div @click="increaseWeatherIndex" class="plus-button">
              <p>+</p>
            </div>
          </div>
        </div>
        <div class="space-between">
          <p>Temperature:</p>
          <p>{{ selectedWeather.temp_c }}°C</p>
        </div>
        <div class="space-between">
          <p>Feelslike:</p>
          <p>{{ selectedWeather.feelslike_c }}°C</p>
        </div>
        <div class="space-between">
          <p>Chance of rain:</p>
          <p>{{ selectedWeather.chance_of_rain }}%</p>
        </div>
        <div class="space-between">
          <p>Chance of snow:</p>
          <p>{{ selectedWeather.chance_of_snow }}%</p>
        </div>
        <div class="space-between">
          <p>Gust:</p>
          <p>{{ selectedWeather.gust_kph }} km/h</p>
        </div>
        <div class="space-between">
          <p>Humidity:</p>
          <p>{{ selectedWeather.humidity }}%</p>
        </div>
      </div>
      <div class="block-backside__footer">
        <div class="double-button">
          <div class="double-button__delete">
            <p>delete</p>
          </div>
          <div @click="rotateCard" class="double-button__rotate">
            <img
              class="rotate-img"
              src="./assets/svg/rotate-button.png"
              alt="rotate image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { API_KEY } from "./config.js";

export default {
  name: "App",

  data() {
    return {
      current: {
        condition: {},
      },
      location: {},
      todayInfo: {
        day: {},
        astro: {},
        hour: [],
      },
      errors: [],
      forecast: {},
      rotatedCard: false,
      selectedWeather: {},
      selectedWeatherIndex: 14,
    };
  },

  watch: {
    selectedWeatherIndex(newValue) {
      this.selectedWeather = this.todayInfo.hour[newValue];
      this.loopWeatherIndex();
    },
  },

  methods: {
    fetchWeather() {
      alert("alert");
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

  async mounted() {
    try {
      const response = await fetch(
        "https://weatherapi-com.p.rapidapi.com/forecast.json?q=Hrodna&days=3",
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
      this.todayInfo = result.forecast.forecastday[0];
      // this.tomorowsInfo = result.forecast.forecastday[1];
      // this.dayAfterTomorrow = result.forecast.forecastday[2];
      this.selectedWeather = this.todayInfo.hour[this.selectedWeatherIndex];
    } catch (error) {
      this.errors.push(error);
    }
  },
};
</script>

<style lang="scss" src="./style.scss"></style>
