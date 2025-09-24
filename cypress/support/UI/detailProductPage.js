export class detailProductPage {

    verifyProductName(productName) {
        cy.get('h1[class="product-single-name"]').should('have.text', productName);
    }

    selectSize(size) {
        //cy.get('ul[class="variant-option-list flex jutify-start gap-2 flex-wrap"]')
        cy.get('a[href="#"]')
        .contains(size)
        .click();
    }

    selectColor(color) {
        //cy.get('ul[class="variant-option-list flex jutify-start gap-2 flex-wrap"]')
        cy.get('a[href="#"]')
        .contains(color)
        .click();
    }

    inputQuantity(quantity) {
        cy.get('input[name="qty"]')
        .clear()
        .type(quantity);
    }

    addToCart() {
        cy.contains('ADD TO CART')
        .click();
    }

    verifySuccessAddToCart() {
        cy.get('div[class="toast-mini-cart"]')
        .should('be.visible')
        .and('have.text', 'JUST ADDED TO YOUR CART');
    }

    clickViewCart() {
        cy.get('a[class="add-cart-popup-button"]')
        .contains('VIEW CART')
        .click();
    }
}

export const onDetailProductPage = new detailProductPage();

