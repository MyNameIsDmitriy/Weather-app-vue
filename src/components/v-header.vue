<template>
  <div class="header">
    <div class="header__content">
      <div class="weather__logo">
        <img src="@/assets/svg/horizon.svg" class="weather-logo" alt="Logo" />
      </div>
      <div class="header__buttons">
        <div class="github-link">
          <a href="https://github.com/MyNameIsDmitriy" target="blank">
            <p>MyNameIsDmitriy</p>
            <img
              src="@/assets/svg/github-icon.svg"
              class="github-icon"
              alt="GitHub Logo"
            />
          </a>
        </div>
        <div class="about-app">
          About
          <div class="about-app__description">
            <div class="about-app__description__flex">
              <h3 class="flex-center">Weather app</h3>
              <div class="about-app__text">
                <div class="text__technologies">
                  <p class="flex-center">Used Tech:</p>
                  <p class="flex-end tech__child">HTML, SCSS</p>
                  <p class="flex-end tech__child">JavaScript</p>
                  <p class="flex-end tech__child">Vue3</p>
                </div>
                <div class="flex-center">
                  <p>Dev:</p>
                  <p>Gopanchuk Dmitriy</p>
                </div>
                <div class="last-child-description">
                  <p class="flex-center">email:</p>
                  <p class="flex-center">Gopanchuk.dm@mail.ru</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="help">
          ?
          <div class="help__description">
            <div class="help__description__flex">
              <p>
                This application allows you to see the weather in any city for
                the coming days.
              </p>
              <p>You can rotate any weather card to see backside.</p>
              <p>
                Also you can delete or add new card by clicking on the buttons.
              </p>
              <p>In INPUT write the city or country you are interested in.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vHeader",
};
</script>

<style lang="scss" scoped>
.header {
  height: 100px;

  font-size: 25px;
}

.header__content {
  display: flex;
  justify-content: space-between;

  height: 100%;
}

.weather__logo {
  width: 130px;
}

.header__buttons {
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 30%;

  div {
    padding: 5px;
  }
}

.github-link {
  a {
    display: flex;
    align-items: center;

    color: aliceblue;
    text-decoration: none;
  }

  a:hover {
    box-shadow: 0 6px red;
  }
}

.about-app {
  position: relative;

  .about-app__description {
    display: none;
  }

  h3 {
    box-shadow: 0 4px red;
  }
}

.help {
  position: relative;

  .help__description {
    display: none;
  }
}

.about-app:hover .about-app__description,
.help:hover .help__description {
  display: block;

  position: absolute;

  top: 30px;
  right: 5px;

  width: 300px;

  font-size: 22px;
  background-color: rgb(37, 37, 39);

  border: 2px solid rgb(74, 74, 77);
  border-radius: 3%;

  z-index: 2;
}

.help:hover .help__description {
  height: 350px;
}

.about-app:hover .about-app__description {
  height: 300px;
}

.about-app__description__flex {
  height: 100%;
}

.help__description__flex,
.about-app__text {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.help__description__flex {
  height: 100%;
}

.about-app__text {
  height: 91%;
}

.last-child-description {
  display: flex;
  flex-direction: column;
}

.flex-center {
  display: flex;
  justify-content: center;
}

.text__technologies {
  display: flex;
  flex-direction: column;
}

.tech__child {
  margin: 7px 0px;
}

.flex-end {
  display: flex;
  justify-content: flex-end;
}

.about-app:hover,
.help:hover {
  cursor: s-resize;
}
</style>
