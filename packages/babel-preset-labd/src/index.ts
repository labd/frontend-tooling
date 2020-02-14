const path = require('path')

const resolve = (module: string) => require.resolve(module)

module.exports = () => {
  const absoluteRuntimePath = path.dirname(resolve('@babel/runtime/package.json'))

  const presets = [
    [
      resolve('@babel/preset-env'),
      {
        loose: true,
        modules: 'commonjs',
        corejs: 3,
        useBuiltIns: 'usage',
        exclude: ['transform-typeof-symbol'],
      },
    ],
    [
      resolve('@babel/preset-react'),
      {
        useBuiltIns: true,
        development: __DEV__,
      },
    ],
    resolve('@babel/preset-typescript'),
  ]

  const plugins = [
    resolve('@babel/plugin-proposal-class-properties'),
    resolve('@babel/plugin-proposal-object-rest-spread'),
    // Transform runtime
    [
      resolve('@babel/plugin-transform-runtime'),
      {
        corejs: false,
        regenerator: true,
        absoluteRuntimePath,
      },
    ],
  ]

  return {
    presets,
    plugins,
  }
}
