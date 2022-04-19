<template>
  <div class="block-backside__footer">
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
  </div>
</template>

<script>
export default {
  name: "BackFooter",
  props: ["rotatedCard"],
  emits: ["rotate"],

  methods: {
    rotateCard() {
      this.$emit("rotate");
    },
  },
};
</script>

<style lang="scss" src="../../style.scss"></style>
