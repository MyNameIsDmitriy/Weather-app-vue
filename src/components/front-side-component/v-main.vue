<template>
  <div class="block__main">
    <img :src="imgSrc" width="250" height="250" alt="weather-status" />
    <p class="weather-status">{{ current.condition.text }}</p>
  </div>
</template>

<script>
export default {
  name: "FrontMain",
  props: ["current", "imgSrc"],
};
</script>

<style lang="scss">
.block__main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.weather-status {
  display: flex;
  justify-content: center;
  justify-items: center;

  font-size: 15px;
  opacity: 0.6;
}
</style>
