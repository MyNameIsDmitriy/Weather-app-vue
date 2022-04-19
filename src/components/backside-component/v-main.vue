<template>
  <div class="block-backside__main">
    <p class="display-center">
      Timezone: {{ location.country }} ({{ location.tz_id }})
    </p>
    <p class="display-center">City: {{ location.name }}</p>

    <div class="set-day-buttons margin-15x">
      <div class="tomorrow-button padding-7px">Tomorow</div>
      <div class="today-button padding-7px">Today</div>
      <div class="after-tomorrow-button padding-7px">After Tomorow</div>
    </div>

    <div class="set-hour-button margin-15x">
      <p class="set-time-margin">Set time:</p>
      <div class="set-buttons">
        <div @click="$emit('decreseWeatherIndex')" class="minus-button">
          <p>-</p>
        </div>
        <div class="hour-viewier">
          <p>{{ selectedWeatherIndex }}</p>
        </div>
        <div @click="$emit('increaseWeatherIndex')" class="plus-button">
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
</template>

<script>
export default {
  name: "BackMain",
  props: ["selectedWeather", "location", "selectedWeatherIndex"],
  emits: ["decreseWeatherIndex", "increaseWeatherIndex"],

  methods: {
    decreseWeatherIndex() {
      this.$emit("decreseWeatherIndex");
    },
    increaseWeatherIndex() {
      this.$emit("increaseWeatherIndex");
    },
  },
};
</script>

<style lang="scss" src="../../style.scss"></style>
