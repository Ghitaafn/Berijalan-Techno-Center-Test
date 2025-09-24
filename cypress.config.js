const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1280,
    viewportHeight: 1000,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 180000,

    env :{
      apiUrlGET: 'http://dummy.restapiexample.com/api/v1/employees',
      apiUrlPOST: 'https://fakestoreapi.com/products',
      baseUrl: 'https://demo.evershop.io/',
    }
  },
});
