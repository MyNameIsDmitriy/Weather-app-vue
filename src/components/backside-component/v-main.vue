<template>
  <div class="block-backside__main">
    <p class="display-center">
      Timezone: {{ location.country }} ({{ location.tz_id }})
    </p>
    <p class="display-center">City: {{ location.name }}</p>

    <div class="set-day-buttons margin-15x">
      <div
        v-for="(day, index) in possibleDays"
        v-bind:key="index"
        @click="selectDay(index)"
        class="set-day-button padding-7px button-red-flash"
      >
        <div>{{ day.name }}</div>
      </div>
    </div>

    <div class="set-hour-button margin-15x">
      <p class="set-time-margin">Set time:</p>
      <div class="set-buttons">
        <div @click="decreseWeatherIndex" class="minus-button button-red-flash">
          <p>-</p>
        </div>
        <div class="hour-viewier">
          <p>{{ selectedWeatherIndex }}</p>
        </div>
        <div @click="increaseWeatherIndex" class="plus-button button-red-flash">
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
    <div class="space-between">
      <p>Sunrise:</p>
      <p>{{ selectedDay.astro.sunrise }}</p>
    </div>
    <div class="space-between">
      <p>Sunset:</p>
      <p>{{ selectedDay.astro.sunset }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BackMain",
  props: [
    "selectedWeather",
    "selectedDay",
    "dayIndex",
    "location",
    "selectedWeatherIndex",
    "possibleDays",
  ],
  emits: ["decreseWeatherIndex", "increaseWeatherIndex", "selectDay"],

  methods: {
    selectDay(idx) {
      this.$emit("selectDay", idx);
    },

    decreseWeatherIndex() {
      this.$emit("decreseWeatherIndex");
    },
    increaseWeatherIndex() {
      this.$emit("increaseWeatherIndex");
    },
  },
};
</script>

<style lang="scss">
.block-backside__main {
  display: flex;
  flex-direction: column;

  font-size: 20px;

  .display-center {
    display: flex;
    justify-content: center;
  }

  .space-between {
    display: flex;
    justify-content: space-between;
  }

  p {
    padding-bottom: 7px;
  }
}

// Set day row on backside start
.set-day-buttons {
  display: flex;
  justify-content: space-around;

  font-size: 25px;
  height: 35px;

  .set-day-button:hover {
    cursor: pointer;
  }

  .set-day-button {
    display: flex;
    align-items: center;

    background-color: rgb(19, 19, 20);

    border-radius: 8px;

    p {
      padding: 0px;
    }
  }
}
// Set day row on backside end

// "Set time:" row start
.set-hour-button {
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 25px;

  p {
    padding-bottom: 0px;
  }
}

.set-time-margin {
  display: flex;
  align-items: center;

  margin-right: 15px;
}

.set-buttons {
  display: flex;
  align-items: center;
}

.minus-button,
.hour-viewier,
.plus-button {
  width: 35px;

  background-color: rgb(19, 19, 20);

  p {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 35px;

    padding-bottom: 0px;
  }
}

.minus-button {
  border-radius: 20% 0 0 20%;

  :hover {
    cursor: pointer;
  }
}

.plus-button {
  border-radius: 0 20% 20% 0;

  :hover {
    cursor: pointer;
  }
}

.button-red-flash {
  :active {
    color: red;
  }
}
// "Set time:" row end
</style>
