<template>
  <PopupInput :shownPopup="shownPopup" />
  <div class="grid-cards cards-wrapper">
    <div
      v-for="(city, idx) in cities"
      v-bind:key="idx"
      class="margin-left-percent"
    >
      <WeatherCard :cities="cities" :idx="idx" />
    </div>

    <div class="margin-left-percent">
      <AddWeatherCard :shownPopup="shownPopup" @showPopup="showPopup" />
    </div>
  </div>
</template>

<script>
import WeatherCard from "@/components/weather-card.vue";
import AddWeatherCard from "@/components/add-weather-card.vue";
import PopupInput from "@/components/v-input.vue";

export default {
  name: "App",
  components: {
    WeatherCard,
    AddWeatherCard,
    PopupInput,
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
      shownPopup: false,
    };
  },

  methods: {
    showPopup() {
      this.shownPopup = !this.shownPopup;
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
