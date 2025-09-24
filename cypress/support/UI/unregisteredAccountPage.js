export class UnregisteredAccountPage {

    verifyOnUnregisterPage(){
        cy.url().should('include', '/account/login');
    }

    loginToAccount(email, password) {
        cy.get('input[name="email"]').type(email);
        cy.get('input[name="password"]').type(password);
        cy.get('button[type="submit"]').click();
    }

    goToRegisterPage() {
        cy.get('a[href="https://demo.evershop.io/account/register"]').click();
    }

    verifyOnRegisterPage() {
        cy.url().should('include', '/account/register');
        cy.contains('Create A New Account').should('be.visible');
    }

    createNewAccount(fullName, email, password) {
        cy.get('input[placeholder="Full Name"]').type(fullName);
        cy.get('input[placeholder="Email"]').type(email);
        cy.get('input[name="password"]').type(password);
        cy.get('button[type="submit"]').click();
    }
}
export const onUnregisteredAccountPage = new UnregisteredAccountPage()