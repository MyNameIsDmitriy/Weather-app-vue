<template>
  <div class="block-backside">
    <BackMain
      :location="location"
      :selectedWeather="selectedWeather"
      :selectedWeatherIndex="selectedWeatherIndex"
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
  props: ["location", "selectedWeather", "selectedWeatherIndex", "rotatedCard"],
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

<style lang="scss" src="../../style.scss"></style>
