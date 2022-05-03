<template>
  <div class="popup" :class="{ shownPopup: shownPopup }">
    <div class="popup__centering">
      <div class="popup__input">
        <h2>Search</h2>
        <form class="input-row">
          <input type="text" placeholder="What place are you interested in ?" />
          <div class="input-accept-button">Accept</div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupInput",
  props: ["shownPopup"],
  emits: [""],
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

  visibility: hidden;
  transition: all 0.8s ease 0s;

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

  input {
    min-width: 800px;
    font-size: 20px;
  }
}

.input-accept-button {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 50px;

  margin-left: 7px;

  border-radius: 0 20% 20% 0; //font-size: ;

  background-color: rgb(19, 19, 20);
}

.shownPopup {
  visibility: visible;
}
</style>
