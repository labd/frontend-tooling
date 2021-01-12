const path = require('path')
import { isDevelopment, isTest, isProduction, env } from './environment'

const resolve = (module: string) => require.resolve(module)

if (!isDevelopment && !isTest && !isProduction) {
  throw new Error(
    `NODE_ENV or BABEL_ENV not set properly, this needs to be either 'development', 'test' or 'production, received ${env}`
  )
}

module.exports = () => {
  const absoluteRuntimePath = path.dirname(resolve('@babel/runtime/package.json'))

  const presets = [
    isTest
      ? [
          // Compile against current node when running tests
          resolve('@babel/preset-env'),
          {
            targets: {
              node: 'current',
            },
            modules: false,
            // This is a heavy transform, exclude it to decrease build times
            exclude: ['transform-typeof-symbol'],
          },
        ]
      : [
          resolve('@babel/preset-env'),
          {
            useBuiltIns: 'entry',
            modules: false,
            corejs: 3,
            // This is a heavy transform, exclude it to decrease build times
            exclude: ['transform-typeof-symbol'],
          },
        ],
    [
      resolve('@babel/preset-react'),
      {
        useBuiltIns: true,
        development: isDevelopment || isTest,
      },
    ],
    resolve('@babel/preset-typescript'),
  ].filter(Boolean)

  const plugins = [
    resolve('@babel/plugin-proposal-class-properties'),
    resolve('@babel/plugin-proposal-object-rest-spread'),
    [
      resolve('@babel/plugin-transform-runtime'),
      {
        corejs: false,
        regenerator: true,
        // Enable this once Node LTS supports ES Modules (most likely Node 14, since 13 supports it.)
        useESModules: false,
        absoluteRuntime: absoluteRuntimePath,
      },
    ],
  ]

  return {
    presets,
    plugins,
  }
}
