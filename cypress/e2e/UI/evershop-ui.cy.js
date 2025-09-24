const {onHomePage} = require("../../support/UI/homePage");
const {onUnregisteredAccountPage} = require("../../support/UI/unregisteredAccountPage");
const {onWomenCollectionPage} = require("../../support/UI/womenCollectionPage");

describe('Evershop UI Test', () => {
    let fullName, email, password, size, color, min, max;
    

    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'));
    })

    it.skip('Soal-1. Create New Account',()=>{
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

    it.only('Soal-2. Add to Cart Product & Verify Quantity',()=>{
        onHomePage.verifyHomePage();
        onHomePage.clickUnregisteredAccountIcon();
        cy.wait(5000);
        onUnregisteredAccountPage.verifyOnUnregisterPage();
        cy.fixture('UI/account.json').then((data) => {
            email = data.email;
            password = data.password;
            min = 133;
            max = 963;
            size = 'M';
            color = 'Purple';
            onUnregisteredAccountPage.loginToAccount(email, password);
            onHomePage.verifyHomePage();
            onHomePage.clickWomenCollection();
            onWomenCollectionPage.verifyWomenCollectionPage();
            onWomenCollectionPage.filterPriceMinRange(min);
            onWomenCollectionPage.filterPriceMaxRange(max);
            onWomenCollectionPage.filterSize(size);
            onWomenCollectionPage.filterColor(color);
        });
    })

    it('Soal-3. Remove product from cart',()=>{

    })
    
    it('Soal-4. Checkout Flow',()=>{

    })

    it('Soal-5. Mobile Viewport Test',()=>{

    })


})
