const weatherImgObject = {
  Fog: require("@/assets/svg/fog.svg"),
  "Light rain": require("@/assets/svg/fog.svg"),
  "Light drizzle": require("@/assets/svg/light-drizzle.svg"),
  Overcast: require("@/assets/svg/thunderstorms-extreme-rain.svg"),
  "Clear day": require("@/assets/svg/clear-day.svg"),
};

export default {
  map: weatherImgObject,
  defaultSrc: require("@/assets/svg/thunderstorms-extreme-rain.svg"),
};
