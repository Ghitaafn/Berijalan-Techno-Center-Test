export class checkoutPage {
    
    verifyCheckoutPage() {
        cy.url().should('include', '/checkout');
    }

    fillShippingDetails1(fullName, telephone, address, city) {
        cy.get('input[name="address[full_name]"]', { timeout: 10000 })
        .type(fullName, { force: true });
        cy.get('input[name="address[telephone]"]', { timeout: 10000 })
        .type(telephone, { force: true });
        cy.get('input[name="address[address_1]"]', { timeout: 10000 })
        .type(address, { force: true });
        cy.get('input[name="address[city]"]', { timeout: 10000 })
        .type(city, { force: true });
    }

    fillShippingDetails2(country, province, postalCode){
        //select country dropdown
        cy.get('select[name="address[country]"]')
        .select(country, { force: true });
        cy.wait(2000)
        //select province dropdown
        cy.get('select[name="address[province]"]')
        .select(province, { force: true });
        cy.get('input[name="address[postcode]"]', { timeout: 10000 })
        .type(postalCode, { force: true });
    }
        

    selectShippingMethod0() {
       cy.get('label[for="method0"]').click();
    }

    selectShippingMethod1() {
       cy.get('label[for="method1"]').click();
    }

    clickContinueToPayment() {
       cy.get('button[type="submit"]').click(); 
    }

    clickPaymentMethodCOD() {
    cy.get('.shipping-method-list', { timeout: 20000 })
  .should('be.visible')
  .contains('Standard')
  .click();

  cy.get('.payment-method-list', { timeout: 20000 })
  .should('be.visible')
  .contains('Cash On Delivery')
  .click({ force: true });

  cy.get('body').then($body => {
  console.log($body.html());
});

    }

    clickPlaceOrder() {
       cy.contains('Place Order').click();
    }

    verifySuccessOrder() {
        cy.contains('Thank you').should('be.visible');
    }
}
export const onCheckoutPage = new checkoutPage()