export class cartPage {
    
    verifyCartPage() {
        cy.url().should('include', '/cart');
    }

    verifyQuantity(order) {
        cy.get('input[type="text"]')
        .eq(0)
        .should('have.value', order)
    }

    verifyTotal(order) {
        cy.get('td[class="hidden md:table-cell"]')
        .eq(3)
        .contains(order)
    }

    clickCheckout() {
        cy.get('a[class="button primary"]').click();
    }

    verifyCartEmpty(){
        cy.contains('Your cart is empty!')
    }

    removeQuantityProduct() {
        cy.get('button[type="button"]')
        .eq(2)
        .click();
    }

    addQuantityProduct() {
        cy.get('button[type="button"]')
        .eq(1)
        .click();
    }
}
export const onCartPage = new cartPage();