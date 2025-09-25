const {onHomePage} = require("../../support/UI/homePage");
const {onUnregisteredAccountPage} = require("../../support/UI/unregisteredAccountPage");
const {onWomenCollectionPage} = require("../../support/UI/womenCollectionPage");
const {onDetailProductPage} = require("../../support/UI/detailProductPage");
const {onCartPage} = require("../../support/UI/cartpage");
const {onCheckoutPage} = require("../../support/UI/checkoutPage");

describe('Evershop UI Test', () => {
    let fullName, email, password, size, color, min, max, order, telephone, address, city, country, province, postalCode;
    

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

    it('Soal-2. Add to Cart Product & Verify Quantity',()=>{
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
            cy.wait(3000)
            onWomenCollectionPage.filterColor(color);
            onWomenCollectionPage.selectProduct(0);
            onDetailProductPage.selectSize(size);
            cy.wait(3000)
            onDetailProductPage.selectColor(color);
            cy.wait(2000)
            onDetailProductPage.addToCart();
            onDetailProductPage.clickViewCart();
            cy.wait(2000)
            onCartPage.verifyCartPage();
            order = 1
            onCartPage.verifyQuantity(order);

        });
    })

    it('Soal-3. Remove product from cart',()=>{
        onHomePage.verifyHomePage();
        onHomePage.clickUnregisteredAccountIcon();
        cy.wait(5000);
        onUnregisteredAccountPage.verifyOnUnregisterPage();
        cy.fixture('UI/account2.json').then((data) => {
            email = data.email;
            password = data.password;
            size = 'M';
            color = 'Purple';
            onUnregisteredAccountPage.loginToAccount(email,password);
            onHomePage.verifyHomePage();
            onHomePage.clickWomenCollection();
            onWomenCollectionPage.verifyWomenCollectionPage();
            onWomenCollectionPage.selectProduct(0);
            cy.wait(2000)
            onDetailProductPage.selectSize(size);
            cy.wait(3000)
            onDetailProductPage.selectColor(color);
            cy.wait(2000)
            onDetailProductPage.addToCart();
            onDetailProductPage.clickViewCart();
            cy.wait(2000)
            onCartPage.verifyCartPage();
            cy.wait(2000)
            

        });
    })
    
    it.only('Soal-4. Checkout Flow',()=>{
        onHomePage.verifyHomePage();
        onHomePage.clickUnregisteredAccountIcon();
        cy.wait(5000);
        onUnregisteredAccountPage.verifyOnUnregisterPage();
        cy.fixture('UI/account2.json').then((data) => {
            email = data.email;
            password = data.password;
            size = 'M';
            color = 'Purple';
            onUnregisteredAccountPage.loginToAccount(email,password);
            onHomePage.verifyHomePage();
            onHomePage.clickWomenCollection();
            onWomenCollectionPage.verifyWomenCollectionPage();
            onWomenCollectionPage.selectProduct(0);
            cy.wait(2000)
            onDetailProductPage.selectSize(size);
            cy.wait(3000)
            onDetailProductPage.selectColor(color);
            cy.wait(2000)
            onDetailProductPage.addToCart();
            onDetailProductPage.clickViewCart();
            cy.wait(2000)
            onCartPage.verifyCartPage();
            cy.wait(2000)
            onCartPage.clickCheckout();
            onCheckoutPage.verifyCheckoutPage();
            cy.wait(2000)
            cy.fixture('UI/shipping-address.json').then((data) => {
                fullName = data.Full_Name;
                telephone = data.Telephone;
                address = data.Address;
                city = data.City;
                country = data.Country;
                province = data.Province;
                postalCode = data.Postal_Code;
                onCheckoutPage.fillShippingDetails1(fullName, telephone, address, city);
                cy.wait(2000)
                onCheckoutPage.fillShippingDetails2(country, province, postalCode);
                cy.wait(2000)
                onCheckoutPage.selectShippingMethod0;
                onCheckoutPage.clickContinueToPayment;
                cy.wait(2000)
                onCheckoutPage.clickPaymentMethodCOD();
                onCheckoutPage.clickPlaceOrder();

            });

        });
    })

    it('Soal-5. Mobile Viewport Test',()=>{
    cy.viewport('iphone-x')                      // 1. Ubah viewport
    cy.visit('https://demo.evershop.io')         // 2. Buka homepage
    cy.get('nav .md\\:hidden a.text-black', { timeout: 10000 })
      .should('be.visible')
    })


})
