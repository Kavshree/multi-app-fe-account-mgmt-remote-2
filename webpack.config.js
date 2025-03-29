const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'account-management',
  filename: 'remoteEntry.js',
  exposes: {
    './Component': './src/app/app.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    'kavya-myuser-service-library': {
      singleton: true,
      strictVersion: false,
      requiredVersion: '^0.0.1'
    }
  },

});
