module.exports = function (api) {
  api.cache(true);

  const presets = [
    '@babel/preset-env',
    'minify'
  ];
  const plugins = [
    '@babel/transform-runtime'
  ];
  const ignore = [
    '**/*.test.js'
  ]

  return {
    presets,
    plugins,
    // ignore
  };
}