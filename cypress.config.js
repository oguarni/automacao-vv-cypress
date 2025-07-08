const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://kurzgesagt.org',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    videoCompression: 32,
    screenshotOnRunFailure: true,
    screenshots: true,
    defaultCommandTimeout: 15000,
    pageLoadTimeout: 60000,
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    chromeWebSecurity: false,
    failOnStatusCode: false,
    modifyObstructiveCode: false,
    retries: {
      runMode: 2,
      openMode: 0
    },
    env: {
      ELECTRON_ENABLE_LOGGING: false
    },
    setupNodeEvents(on, config) {
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
          launchOptions.args.push('--ignore-certificate-errors')
          launchOptions.args.push('--ignore-ssl-errors')
          launchOptions.args.push('--ignore-certificate-errors-spki-list')
          launchOptions.args.push('--disable-extensions')
          launchOptions.args.push('--disable-plugins')
          launchOptions.args.push('--disable-images')
          launchOptions.args.push('--disable-javascript-harmony-shipping')
          launchOptions.args.push('--disable-background-networking')
          launchOptions.args.push('--disable-sync')
          launchOptions.args.push('--disable-translate')
          launchOptions.args.push('--disable-ipc-flooding-protection')
          launchOptions.args.push('--force-device-scale-factor=1')
          launchOptions.args.push('--use-gl=swiftshader')
          launchOptions.args.push('--disable-accelerated-2d-canvas')
          launchOptions.args.push('--disable-accelerated-video-decode')
          launchOptions.args.push('--disable-accelerated-video-encode')
          launchOptions.args.push('--disable-gpu-sandbox')
          launchOptions.args.push('--disable-2d-canvas-clip-aa')
          launchOptions.args.push('--disable-3d-apis')
          launchOptions.args.push('--disable-accelerated-mjpeg-decode')
          launchOptions.args.push('--disable-shared-workers')
          launchOptions.args.push('--disable-webgl')
          launchOptions.args.push('--disable-webgl2')
          launchOptions.args.push('--disable-canvas-aa')
          launchOptions.args.push('--disable-logging')
          launchOptions.args.push('--silent')
          launchOptions.args.push('--log-level=3')
        }
        
        if (browser.name === 'electron') {
          launchOptions.args.push('--disable-gpu')
          launchOptions.args.push('--disable-software-rasterizer')
          launchOptions.args.push('--disable-background-timer-throttling')
          launchOptions.args.push('--disable-backgrounding-occluded-windows')
          launchOptions.args.push('--disable-renderer-backgrounding')
          launchOptions.args.push('--disable-dev-shm-usage')
          launchOptions.args.push('--no-sandbox')
          launchOptions.args.push('--disable-web-security')
          launchOptions.args.push('--disable-features=VizDisplayCompositor')
          launchOptions.args.push('--ignore-certificate-errors')
          launchOptions.args.push('--ignore-ssl-errors')
          launchOptions.args.push('--ignore-certificate-errors-spki-list')
          launchOptions.args.push('--disable-extensions')
          launchOptions.args.push('--disable-plugins')
          launchOptions.args.push('--disable-images')
          launchOptions.args.push('--disable-javascript-harmony-shipping')
          launchOptions.args.push('--disable-background-networking')
          launchOptions.args.push('--disable-sync')
          launchOptions.args.push('--disable-translate')
          launchOptions.args.push('--disable-ipc-flooding-protection')
          launchOptions.args.push('--force-device-scale-factor=1')
          launchOptions.args.push('--use-gl=swiftshader')
          launchOptions.args.push('--disable-accelerated-2d-canvas')
          launchOptions.args.push('--disable-accelerated-video-decode')
          launchOptions.args.push('--disable-accelerated-video-encode')
          launchOptions.args.push('--disable-gpu-sandbox')
          launchOptions.args.push('--disable-2d-canvas-clip-aa')
          launchOptions.args.push('--disable-3d-apis')
          launchOptions.args.push('--disable-accelerated-mjpeg-decode')
          launchOptions.args.push('--disable-shared-workers')
          launchOptions.args.push('--disable-webgl')
          launchOptions.args.push('--disable-webgl2')
          launchOptions.args.push('--disable-canvas-aa')
          launchOptions.args.push('--disable-logging')
          launchOptions.args.push('--silent')
          launchOptions.args.push('--log-level=3')
        }
        
        return launchOptions
      })
      
      on('task', {
        log(message) {
          console.log(message)
          return null
        }
      })
    }
  }
})