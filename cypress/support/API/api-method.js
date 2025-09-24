// cypress/support/commands.js
Cypress.Commands.add('getAPI', url => {
  cy.request({
    method: 'GET',
    url: url,
    failOnStatusCode: false
  })
})

Cypress.Commands.add('postAPI', (urlLogin, requestBody) => {
   cy.request({
        method: 'POST',
        url: urlLogin,
        body: requestBody,
        failOnStatusCode: false,
        headers: {
      'Content-Type': 'application/json'
    }
    })
});