module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};

// babel.config.js
// module.exports = {
//    plugins: ["nativewind/babel"],
//    presets: ["@babel/preset-env", "@babel/preset-react"],

//   };