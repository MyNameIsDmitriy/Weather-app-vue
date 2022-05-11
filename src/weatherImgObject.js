const weatherImgObject = {
  Fog: require("@/assets/svg/fog.svg"),
  Mist: require("@/assets/svg/fog.svg"),
  "Light rain": require("@/assets/svg/rain.svg"),
  "Light drizzle": require("@/assets/svg/overcast-drizzle.svg"),
  "Light rain shower": require("@/assets/svg/rain.svg"),
  "Patchy rain possible": require("@/assets/svg/light-drizzle.svg"),
  "Moderate rain": require("@/assets/svg/rain.svg"),
  "Heavy rain": require("@/assets/svg/extreme-rain.svg"),
  "Clear day": require("@/assets/svg/clear-day.svg"),
  Clear: require("@/assets/svg/clear-day.svg"),
  Sunny: require("@/assets/svg/clear-day.svg"),
  Overcast: require("@/assets/svg/overcast.svg"),
  Cloudy: require("@/assets/svg/overcast.svg"),
  "Partly cloudy": require("@/assets/svg/partly-cloudy-day.svg"),
  "Blowing snow": require("@/assets/svg/wind-snow.svg"),
  "Light snow": require("@/assets/svg/snow.svg"),
  "Heavy snow": require("@/assets/svg/extreme-snow.svg"),
};

export default {
  map: weatherImgObject,
  defaultSrc: require("@/assets/svg/not-available.svg"),
};
