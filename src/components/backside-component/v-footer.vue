<template>
  <div class="block-backside__footer">
    <div class="double-button">
      <div @click="deleteWeatherCard(city)" class="double-button__delete">
        <p>delete</p>
      </div>
      <div @click="rotateCard" class="double-button__rotate">
        <img
          class="rotate-img"
          src="@/assets/svg/rotate-button.png"
          alt="rotate image"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BackFooter",
  props: ["rotatedCard", "city"],
  emits: ["rotate", "deleteWeatherCard"],

  methods: {
    rotateCard() {
      this.$emit("rotate");
    },

    deleteWeatherCard(city) {
      this.$emit("deleteWeatherCard", city.index);
    },
  },
};
</script>

<style lang="scss">
.block-backside__footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
}

.block-backside__footer {
  justify-content: center;
}
</style>
