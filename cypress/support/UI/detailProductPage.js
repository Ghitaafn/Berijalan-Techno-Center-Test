export class detailProductPage {

    verifyProductName(productName) {
        cy.get('h1.product-name').should('have.text', productName);
    }

    selectSize(size) {
        cy.get('div[class="variant-option-list flex jutify-start gap-2 flex-wrap"]')
        .contains(size)
        .click();
    }

    selectColor(color) {
        cy.get('div[class="variant-option-list flex jutify-start gap-2 flex-wrap"]')
        .contains(color)
        .click();
    }

    inputQuantity(quantity) {
        cy.get('input[name="qty"]')
        .clear()
        .type(quantity);
    }

    addToCart() {
        cy.get('button[class="button primary outline"]')
        .contains('Add to Cart')
        .click();
    }

    verifySuccessAddToCart() {
        cy.get('div[class="toast-mini-cart"]')
        .should('be.visible')
        .and('have.text', 'JUST ADDED TO YOUR CART');
    }

    clickViewCart() {
        cy.get('a[class="add-cart-popup-button"]')
        .contains('View Cart')
        .click();
    }
}

export const onDetailProductPage = new detailProductPage();

