const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests/e2e',
  timeout: 30000,
  use: {
    baseURL: 'http://localhost:8000',
    headless: true,
  },
  webServer: {
    command: 'python3 -m http.server 8000 -d public',
    port: 8000,
    timeout: 10000,
    reuseExistingServer: !process.env.CI,
  },
});
