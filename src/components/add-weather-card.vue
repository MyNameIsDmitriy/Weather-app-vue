<template>
  <div @click="smth" class="add-weather-card active-red-border">
    <div class="add-weather-card__img">
      <img src="@/assets/svg/plus-button.svg" alt="plus" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AddWeatherCard",
  props: [""],
  emits: [""],

  methods: {
    smth() {
      console.log("Button is working !");
    },

    addWeatherButton() {},
  },
};
</script>

<style lang="scss">
.add-weather-card {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 420px;
  height: 460px;

  padding: 20px 25px;

  background-color: rgb(37, 37, 39);

  border: 2px solid rgb(74, 74, 77);
  border-radius: 3%;
}

.active-red-border:active {
  border: 2px solid rgb(255, 0, 0);
}
</style>
