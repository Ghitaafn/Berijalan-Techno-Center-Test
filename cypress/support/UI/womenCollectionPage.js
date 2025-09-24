export class womenCollectionPage {

    verifyWomenCollectionPage() {
        cy.url().should('include', '/women');
    }

    filterPriceMinRange(min) {
        cy.get('input.min[type="range"]')
        .invoke('val', min)
        .trigger('change', {force: true});

        cy.get('.rangeslider .tooltip.min output')
        .should('contain', `$${min}.00`);
    }

    filterPriceMaxRange(max) {
        cy.get('input.max[type="range"]')
        .invoke('val', max)
        .trigger('change', {force: true});

        cy.get('.rangeslider .tooltip.max output')
        .should('contain', `$${max}.00`);
    }

    filterSize(size) {
        cy.get('div[class="attribute-filter mt-8"]')
        .eq(0)
        .contains(size)
        .click();
    }

    filterColor(color) {
        cy.get('div[class="attribute-filter mt-8"]')
        .eq(1)
        .contains(color)
        .click();
    }

    selectProduct(order) {
        cy.get('div[class="product-thumbnail-listing"]')
        .eq(order)
        .click();
    }
    getProductName(order) {
        cy.get('div[class="product-name product-list-name mt-4 mb-1"]')
        .eq(order)
        .invoke('productName');
    }
}
export const onWomenCollectionPage = new womenCollectionPage();