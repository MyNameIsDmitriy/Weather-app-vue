<template>
  <div class="block__footer">
    <div class="params">
      <p class="wind-speed">{{ current.wind_kph }} km/h</p>
      <p class="humidity">{{ current.humidity }}%</p>
    </div>
    <div class="double-button">
      <div class="double-button__delete">
        <p>delete</p>
      </div>
      <div @click="$emit('rotate')" class="double-button__rotate">
        <img
          class="rotate-img"
          src="../../assets/svg/rotate-button.png"
          alt="rotate image"
        />
      </div>
    </div>
    <p class="temp">{{ current.temp_c }}°C</p>
  </div>
</template>

<script>
export default {
  name: "FrontFooter",
  props: ["current", "rotatedCard"],
  emits: ["rotate"],

  methods: {
    rotateCard() {
      this.$emit("rotate");
    },
  },
};
</script>

<style lang="scss" src="../../style.scss"></style>
