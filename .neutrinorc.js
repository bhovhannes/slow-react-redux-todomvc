module.exports = {
  use: [
    '@neutrinojs/jest',
    [
      '@neutrinojs/react',
      {
        /* preset options */

        // Example: disable Hot Module Replacement
        hot: false,

        // Target specific browsers with @babel/preset-env
        targets: {
          browsers: ['last 1 Chrome versions']
        },

        // Add additional Babel plugins, presets, or env options
        babel: {
          // Override options for @babel/preset-env:
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: false
              }
            ]
          ]
        }
      }
    ]
  ]
};
