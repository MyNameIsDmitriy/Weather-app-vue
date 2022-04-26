<template>
  <div class="block-backside">
    <BackMain
      :location="location"
      :selectedWeather="selectedWeather"
      :selectedWeatherIndex="selectedWeatherIndex"
      :dayInfo="dayInfo"
      @decreseWeatherIndex="decreseWeatherIndex"
      @increaseWeatherIndex="increaseWeatherIndex"
    />
    <BackFooter :rotatedCard="rotatedCard" @rotate="rotateCard" />
  </div>
</template>

<script>
import BackFooter from "./v-footer.vue";
import BackMain from "./v-main.vue";

export default {
  name: "BackSide",
  props: [
    "location",
    "selectedWeather",
    "dayInfo",
    "selectedWeatherIndex",
    "rotatedCard",
  ], // add types
  emits: ["decreseWeatherIndex", "increaseWeatherIndex", "rotate"],
  components: {
    BackMain,
    BackFooter,
  },

  methods: {
    rotateCard() {
      this.$emit("rotate");
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
</style>
