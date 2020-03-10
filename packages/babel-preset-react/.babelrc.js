// Ironically we're compiling our babel preset using babel, so we need a babel config for our babel preset :~)
module.exports = api => {
  api.cache(true)

  const presets = [
    [
      '@babel/preset-env',
      {
        modules: 'commonjs',
        corejs: 3,
        useBuiltIns: 'usage',
      },
    ],
    '@babel/preset-typescript',
  ]

  return { presets }
}
