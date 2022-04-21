const weatherImgObject = {
  "Light rain": require("@/assets/svg/rain.svg"),
  "Light drizzle": require("@/assets/svg/overcast-drizzle.svg"),
  "Light rain shower": require("@/assets/svg/rain.svg"),
  "Patchy rain possible": require("@/assets/svg/light-drizzle.svg"),
  "Moderate rain": require("@/assets/svg/rain.svg"),
  "Heavy rain": require("@/assets/svg/extreme-rain.svg"),
  Fog: require("@/assets/svg/fog.svg"),
  Mist: require("@/assets/svg/fog.svg"),
  Overcast: require("@/assets/svg/overcast.svg"),
  "Clear day": require("@/assets/svg/clear-day.svg"),
  Cloudy: require("@/assets/svg/overcast.svg"),
};

export default {
  map: weatherImgObject,
  defaultSrc: require("@/assets/svg/not-available.svg"),
};