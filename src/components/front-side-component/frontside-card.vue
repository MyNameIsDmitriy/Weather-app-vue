<template>
  <div class="block-front-side">
    <FrontHeader :location="location" />
    <FrontMain :current="current" />
    <FrontFooter
      :current="current"
      :rotatedCard="rotatedCard"
      @rotate="rotateCard"
    />
  </div>
</template>

<script>
import FrontHeader from "./v-header.vue";
import FrontMain from "./v-main.vue";
import FrontFooter from "./v-footer.vue";

export default {
  name: "FrontSide",
  props: ["location", "current", "rotatedCard"],
  emits: ["rotate"],
  components: {
    FrontHeader,
    FrontMain,
    FrontFooter,
  },

  methods: {
    rotateCard() {
      this.$emit("rotate");
    },
  },
};
</script>

<style lang="scss" src="../../style.scss"></style>
