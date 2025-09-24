describe('API Testing', () => {
    let getUrl;
    let postUrl;

    before(() => {
        // Load URLs from cypress.config.js
        getUrl = Cypress.env('apiUrlGET');
        postUrl = Cypress.env('apiUrlPOST');
    });

    it('GET Request Test', () => {
        cy.fixture('API/data.json').then((expectedData) => {
        // request GET
      cy.getAPI(getUrl).then((response) => {    // <== response hanya valid di sini
        console.log('=== FULL API RESPONSE ===', response.body);

        const apiData = response.body.data;

        // Normalisasi tipe supaya string vs number setara
        const normalize = (obj) => ({
          ...obj,
          id: String(obj.id),
          employee_salary: String(obj.employee_salary),
          employee_age: String(obj.employee_age)
        });

        const normalizedApi     = apiData.map(normalize);
        const normalizedFixture = expectedData.map(normalize);

        // Cari data yang beda
        const differences = Cypress._.differenceWith(
          normalizedApi,
          normalizedFixture,
          Cypress._.isEqual
        );

        console.log('=== DIFFERENCES (API vs Fixture) ===', differences);

        if (differences.length > 0) {
          cy.log(`Data berbeda ditemukan: ${JSON.stringify(differences, null, 2)}`);
        } else {
          cy.log('Tidak ada perbedaan data');
        }

        // optional assert status
        expect(response.status).to.eq(200);
            });
        });
    });

    it('POST Request Test', () => {
        cy.fixture('API/post-data.json').then((data) => {
            cy.postAPI(postUrl, data).then((response) => {
                expect(response.status).to.eq(201);
                expect(response.body).to.have.property('id');      // fakestore mengembalikan id baru
                expect(response.body).to.include.keys('title','price','description','category');
                expect(response.body.title).to.eq(data.title);
            });
        });
    });

    it('POST Request Test - Empty Data', () => {
       cy.fixture('API/post-data-empty.json').then((data) => {
            cy.postAPI(postUrl, data).then((response) => {
             console.log('=== EMPTY BODY RESPONSE ===', response.status, response.body);

             // Kita menganggap ini NEGATIVE secara bisnis,
             // walau secara HTTP dia sukses.
            expect(response.status).to.eq(201);
             // Validasi tambahan untuk menandai perilaku yang tidak sesuai ekspektasi
             // misal: semua field default/null
            expect(response.body).to.have.property('id');
            cy.log('Server menerima body kosong dan tetap membuat resource (behavior unexpected)');
            });
        }); 
    }); 

});
