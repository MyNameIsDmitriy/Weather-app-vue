<template>
  <div class="popup" :class="{ shownPopup: shownPopup }">
    <div @click.self="hidePopup" class="popup__centering">
      <div class="popup__input">
        <h2>Search</h2>
        <form
          class="input-row"
          @keydown.esc="hidePopup"
          @submit.prevent="addWeatherButton"
        >
          <input
            ref="inputRef"
            v-model="value"
            class="city-input"
            placeholder="What place are you interested in ?"
          />
          <input
            type="submit"
            class="input-accept-button active-red"
            value="Accept"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateWidgetPopup",
  props: ["shownPopup", "cities"],
  emits: ["addWeather", "hidePopup"],

  data() {
    return {
      value: "",
    };
  },

  watch: {
    shownPopup() {
      if (this.shownPopup) {
        this.$refs.inputRef.focus();
      }
    },
  },

  methods: {
    addWeatherButton() {
      this.value.length > 0 && this.$emit("addWeather", this.value);
      this.value = "";
    },

    hidePopup() {
      this.$emit("hidePopup");
      this.value = "";
    },
  },
};
</script>

<style lang="scss">
.popup {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;

  transition: all 0.15s ease 0s;
  transform: scale(0);

  z-index: 1;

  h2 {
    padding: 10px;
    font-size: 40px;
  }

  .popup__centering {
    min-height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.popup__input {
  padding: 30px 10px;
}

.input-row {
  display: flex;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  .city-input {
    width: 800px;

    background-color: rgb(19, 19, 20);

    padding: 12px;

    color: red;
    font-size: 20px;

    border: none;
    -webkit-appearance: none;
    -ms-apperance: none;
    -moz-appearance: none;
    appearance: none;

    outline: none;
  }
  .city-input:focus::placeholder {
    color: transparent;
  }

  .city-input::placeholder {
    color: rgb(172, 172, 172);
    transition: color 0.3s ease;
  }
}

.input-accept-button {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 50px;

  margin-left: 7px;

  background-color: rgb(19, 19, 20);

  color: red;

  border-radius: 0 20% 20% 0; //font-size: ;
  border: none;
  -webkit-appearance: none;
  -ms-apperance: none;
  -moz-appearance: none;
  appearance: none;

  outline: none;
}

.input-accept-button:hover {
  cursor: pointer;
}

.active-red:hover {
  color: rgb(105, 16, 16);
}

.active-red:active {
  border: 2px solid rgb(255, 0, 0);
  color: red;
}

.shownPopup {
  transform: scale(1);
}

@media (max-width: 1050px) {
  .city-input {
    max-width: 500px;
  }
}

@media (max-width: 650px) {
  .city-input {
    max-width: 360px;
  }
}
</style>
