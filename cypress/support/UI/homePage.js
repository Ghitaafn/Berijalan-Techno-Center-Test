export class HomePage {

    verifyHomePage() {
        cy.contains('Your Heading Here');
    }

    verifyKidsCollection() {
        cy.get('a[class="button primary"]')
        .contains('Shop Kids')
        .should('be.visible');
    }

    verifyWomenCollection() {
        cy.get('a[class="button primary"]')
        .contains('Shop Women')
        .should('be.visible');
    }

    verifyMenCollection() {
        cy.get('a[class="button primary"]')
        .contains('Shop Men')
        .should('be.visible');
    }

    verifySearchIcon() {
        cy.get('a[class="search-icon"]').should('be.visible');
    }

    verifyCartIcon() {
        cy.get('a[class="mini-cart-icon"]').should('be.visible');
    }

    verifyUnregisteredAccountIcon() {
        cy.get('a[href="https://demo.evershop.io/account/login"]').should('be.visible');
    }

    verifyRegisteredAccountIcon() {
        cy.get('a[href="https://demo.evershop.io/account"]').should('be.visible');
    }
    
}
export const onHomePage = new HomePage();