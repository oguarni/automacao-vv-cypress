const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://kurzgesagt.org',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false, // Disable video recording to avoid ffmpeg issues
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 15000,
    pageLoadTimeout: 60000,
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    chromeWebSecurity: false,
    failOnStatusCode: false,
    retries: {
      runMode: 2,
      openMode: 0
    },
    setupNodeEvents(on, config) {
      // Handle browser launch arguments to fix graphics issues
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome' || browser.name === 'chromium') {
          launchOptions.args.push('--disable-gpu')
          launchOptions.args.push('--disable-software-rasterizer')
          launchOptions.args.push('--disable-background-timer-throttling')
          launchOptions.args.push('--disable-backgrounding-occluded-windows')
          launchOptions.args.push('--disable-renderer-backgrounding')
          launchOptions.args.push('--disable-dev-shm-usage')
          launchOptions.args.push('--no-sandbox')
          launchOptions.args.push('--disable-web-security')
          launchOptions.args.push('--disable-features=VizDisplayCompositor')
        }
        return launchOptions
      })
    }
  }
})