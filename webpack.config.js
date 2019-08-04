const path = require('path');

module.exports = {
  resolve: {
    extensions: ['*', '.ts', '.tsx'],
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@resume': path.resolve(__dirname, 'src/resume'),
      '@sections': path.resolve(__dirname, 'src/sections')
    }
  }
};
