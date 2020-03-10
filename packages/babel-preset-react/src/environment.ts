const env = process.env.NODE_ENV || process.env.BABEL_ENV

const isDevelopment = env === 'development'
const isProduction = env === 'production'
const isTest = env === 'test'

export { env, isDevelopment, isProduction, isTest }
