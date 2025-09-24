export class HomePage {

    verifyHomePage() {
        cy.contains('Your Heading Here');
    }

    clickKidsCollection() {
        cy.get('a[class="button primary"]')
        .contains('Shop kids')
        .should('be.visible')
        .click();
    }

    clickWomenCollection() {
        cy.get('a[class="button primary"]')
        .contains('Shop women')
        .should('be.visible')
        .click();
    }
    
    clickMenCollection() {
        cy.get('a[class="button primary"]')
        .contains('Shop men')
        .should('be.visible')
        .click();
    }

    clickSearchIcon() {
        cy.get('a[class="search-icon"]')
        .should('be.visible')
        .click();
    }

    clickCartIcon() {
        cy.get('a[class="mini-cart-icon"]')
        .should('be.visible')
        .click();
    }

    clickUnregisteredAccountIcon() {
        cy.get('div[class="self-center"] > a[href="https://demo.evershop.io/account/login"]')
        .should('be.visible')
        .dblclick();
    }

    clickRegisteredAccountIcon() {
        cy.get('a[href="https://demo.evershop.io/account"]').should('be.visible');
    }
    
}
export const onHomePage = new HomePage();   