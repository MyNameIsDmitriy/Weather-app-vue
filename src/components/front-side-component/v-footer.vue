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
          src="@/assets/svg/rotate-button.png"
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

<style lang="scss">
.block__footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
}

.params {
  display: flex;
  flex-direction: column;

  font-size: 20px;
}

.humidity {
  padding: 10px 0px;
}

.double-button {
  padding: 10px 0px;

  display: flex;
  justify-content: center;
  align-items: center;

  .double-button__delete {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    height: 40px;

    border-radius: 20% 0 0 20%;

    background-color: rgb(19, 19, 20);

    // :hover{
    //   cursor: pointer;
    // }
  }

  .double-button__rotate {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    height: 40px;

    :hover {
      transform: rotate(360deg);
      transition: all 0.5s ease 0s;

      cursor: pointer;
    }

    img {
      width: 40px;
    }
  }
}

.temp {
  font-size: 50px;
}
</style>
