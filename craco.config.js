module.exports = {
  webpack: require('./webpack.config').resolve,
  jest: {
    configure: {
      moduleNameMapper: {
        '^@components(.*)$': '<rootDir>/src/components$1',
        '^@resume(.*)$': '<rootDir>/src/resume$1',
        '^@sections(.*)$': '<rootDir>/src/sections$1'
      }
    }
  }
};
