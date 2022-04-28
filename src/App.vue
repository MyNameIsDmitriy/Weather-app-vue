<template>
  <div class="grid-cards cards-wrapper">
    <div
      v-for="(city, idx) in cities"
      v-bind:key="idx"
      class="margin-left-percent"
      :class="{ 'margin-top-percent': isEven(idx) }"
    >
      <WeatherCard :cities="cities" :idx="idx" />
    </div>
  </div>
</template>

<script>
import WeatherCard from "@/components/weather-card.vue";

export default {
  name: "App",
  components: {
    WeatherCard,
  },

  data() {
    return {
      cities: ["Hrodna", "Tokio", "Nunavut"],
    };
  },

  methods: {
    isEven(idx) {
      return idx % 2 == 0;
    },
  },
};
</script>

<style lang="scss">
.grid-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
