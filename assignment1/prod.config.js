const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity:false,
    baseUrl:"https",
    viewportWidth: 800,
    viewportHeight: 620,
    setupNodeEvents(on, config) {
      // Add custom plugins if needed
    },
  },
  env: {
    environment: 'production',
  },
});