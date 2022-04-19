<template>
  <div class="block__main">
    <img
      src="../../assets/svg/clear-day.svg"
      width="250"
      height="250"
      alt="weather-status"
    />
    <p class="weather-status">{{ current.condition.text }}</p>
  </div>
</template>

<script>
export default {
  name: "FrontMain",
  props: ["current"],
};
</script>

<style lang="scss" src="../../style.scss"></style>
