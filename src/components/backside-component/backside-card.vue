<template>
  <div class="block-backside">
    <BackMain
      :location="location"
      :selectedDay="selectedDay"
      :dayIndex="dayIndex"
      :selectedWeather="selectedWeather"
      :selectedWeatherIndex="selectedWeatherIndex"
      :possibleDays="possibleDays"
      @selectDay="selectDay"
      @decreseWeatherIndex="decreseWeatherIndex"
      @increaseWeatherIndex="increaseWeatherIndex"
    />
    <BackFooter
      :rotatedCard="rotatedCard"
      :city="city"
      @rotate="rotateCard"
      @deleteWeatherCard="deleteWeatherCard"
    />
  </div>
</template>

<script>
import BackFooter from "./v-footer.vue";
import BackMain from "./v-main.vue";

export default {
  name: "BackSide",
  props: [
    "location",
    "selectedDay",
    "dayIndex",
    "selectedWeather",
    "selectedWeatherIndex",
    "rotatedCard",
    "possibleDays",
    "city",
  ], // add types
  emits: [
    "decreseWeatherIndex",
    "increaseWeatherIndex",
    "selectDay",
    "rotate",
    "deleteWeatherCard",
  ],
  components: {
    BackMain,
    BackFooter,
  },

  methods: {
    rotateCard() {
      this.$emit("rotate");
    },

    deleteWeatherCard(index) {
      this.$emit("deleteWeatherCard", index);
    },

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
.block-backside {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: absolute;

  width: 420px;
  height: 460px;

  padding: 20px 25px;

  background-color: rgb(37, 37, 39);

  border: 2px solid rgb(74, 74, 77);
  border-radius: 3%;

  transition: 0.35s;
  backface-visibility: hidden;
}

@media (max-width: 410px) {
  .block-backside {
    width: 410px;
  }
}
</style>
