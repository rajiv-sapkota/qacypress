const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1000,
    viewportHeight: 720,
    setupNodeEvents(on, config) {
      // Add custom plugins if needed
    },
  },
  env: {
    environment: 'production',
  },
});