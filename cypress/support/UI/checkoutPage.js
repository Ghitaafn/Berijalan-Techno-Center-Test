export class checkoutPage {
    
    verifyCheckoutPage() {
        cy.url().should('include', '/checkout');
    }

    fillShippingDetails1(fullName, telephone, address, city) {
        cy.get('input[name="address[full_name]"]').type(fullName);
        cy.get('input[name="address[telephone]"]').type(telephone);
        cy.get('input[name="address[address_1]"]').type(address);
        cy.get('input[name="address[city]"]').type(city);
    }
    
    fillShippingDetails2(country, province, postalCodes){
        //select country dropdown
        cy.get('select[class="select-container"]')
        .click();
        cy.contains(country)
        .click();
        cy.wait(2000)
        //select province dropdown
        cy.get('select[name="address[province]"]')
        .click();
        cy.contains(province)
        .click();
        cy.get('input[name="address[country]"]').type(country);
        cy.get('input[name="address[postcode]"]').type(postalCode);
        //cy.get('input[name="address[phone]"]').type(phone);
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

    clickPaymentMethod(order) {
         cy.get('div[class="flex justify-start items-center gap-4"]')
         .eq(order)
         .click();
    }

    clickPlaceOrder() {
       cy.get('button[type="button"]').click(); 
    }

    verifySuccessOrder() {
        cy.contains('Thank you').should('be.visible');
    }
}
export const onCheckoutPage = new checkoutPage();