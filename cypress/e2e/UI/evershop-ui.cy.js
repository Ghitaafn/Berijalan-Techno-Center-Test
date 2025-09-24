const {onHomePage} = require("../../support/UI/homePage");
const {onUnregisteredAccountPage} = require("../../support/UI/unregisteredAccountPage");

describe('Evershop UI Test', () => {
    let fullName, email, password;

    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'));
    })

    it.only('Soal-1. Create New Account',()=>{

        onHomePage.verifyHomePage();
        onHomePage.clickUnregisteredAccountIcon();
        cy.wait(5000);
       onUnregisteredAccountPage.verifyOnUnregisterPage();
        onUnregisteredAccountPage.goToRegisterPage();
        onUnregisteredAccountPage.verifyOnRegisterPage();
        cy.fixture('UI/account.json').then((data) => {
            fullName = data.full_name;
            email = data.email;
            onUnregisteredAccountPage.verifyOnRegisterPage();
            onUnregisteredAccountPage.createNewAccount(fullName, email, fullName);
            onHomePage.verifyHomePage();
        });
    })

    it('Soal-2. Add to Cart Product & Verify Quantity',()=>{

    })

    it('Soal-3. Remove product from cart',()=>{

    })
    
    it('Soal-4. Checkout Flow',()=>{

    })

    it('Soal-5. Mobile Viewport Test',()=>{

    })


})
