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
        cy.get('span[class="filter-option"]')
        .contains(size)
        .dblclick();
    }

    filterColor(color) {
        cy.get('span[class="filter-option"]')
        .contains(color)
        .dblclick();
    }

    selectProduct(order) {
        cy.get('div[class="product-thumbnail-listing"]')
        .eq(order)
        .click();
    }
    getProductName(order) {
        return cy.get('p[class="product-name"]')
        .eq(order)
        .invoke('text');
    }
}
export const onWomenCollectionPage = new womenCollectionPage();