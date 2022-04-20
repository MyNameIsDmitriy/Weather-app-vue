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

<style lang="scss">
.block__header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 39px;
}

.city {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 30px;
  margin: 0;

  border: 2px solid rgb(74, 74, 77);
  border-radius: 10%;

  background-color: rgb(29, 29, 31);

  p {
    margin: 0;
    font-size: 15px;
  }
}

.time {
  font-size: 30px;
}
</style>
