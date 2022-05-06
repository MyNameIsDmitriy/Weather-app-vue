<template>
  <div class="block-front-side">
    <FrontHeader :location="location" />
    <FrontMain :current="current" :imgSrc="imgSrc" />
    <FrontFooter
      :current="current"
      :rotatedCard="rotatedCard"
      :city="city"
      @rotate="rotateCard"
      @deleteWeatherCard="deleteWeatherCard"
    />
  </div>
</template>

<script>
import FrontHeader from "./v-header.vue";
import FrontMain from "./v-main.vue";
import FrontFooter from "./v-footer.vue";

export default {
  name: "FrontSide",
  props: ["location", "current", "imgSrc", "rotatedCard", "city"],
  emits: ["rotate", "deleteWeatherCard"],
  components: {
    FrontHeader,
    FrontMain,
    FrontFooter,
  },

  methods: {
    rotateCard() {
      this.$emit("rotate");
    },

    deleteWeatherCard(index) {
      this.$emit("deleteWeatherCard", index);
    },
  },
};
</script>

<style lang="scss">
.block-front-side {
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
