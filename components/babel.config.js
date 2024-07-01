
const { Reanimated } = require("react-native-gesture-handler/lib/typescript/handlers/gestures/reanimatedWrapper");

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    Plugins:['react-native-Reanimated/Plugin'],
    Plugins:['react-native-gesture-handler/Plugin'],
  };
};
