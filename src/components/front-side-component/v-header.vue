<template>
  <div class="block__header">
    <div class="city">
      <p class="city__name">{{ location.name }}</p>
    </div>
    <p class="time">{{ location.localtime }}</p>
  </div>
</template>

<script>
export default {
  name: "FrontHeader",
  props: ["location"],
};
</script>

<style lang="scss" src="../../style.scss"></style>
