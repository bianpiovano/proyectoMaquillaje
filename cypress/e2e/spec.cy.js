describe('Search MakeUp', () => {
let locators;

  beforeEach(() => {
  cy.visit('/')

})  

  /// style="font-family: 'Space Mono', Geneva, Tahoma, Verdana, sans-serif; font-weight: 400; font-size: 22px;

// Buscar un Gloss
it('search gloss', () => { 
  cy.fixture('index').then(function (testdata) {
    this.testdata = testdata
    cy.searchItem('gloss', this.testdata.gloss);
    cy.searchColor('chuckie');
  })
  })

// Buscar un Labial 
it('search lipstick', () => {
  cy.fixture('index').then(function (testdata) {
    this.testdata = testdata
    cy.searchItem('lipstick', this.testdata.lipstick);
    cy.searchColor('tongue tied');
})
})

//Buscar un Delineador
it('search eyeliner', ()  => {
  cy.fixture('index').then(function (testdata) {
    this.testdata = testdata
  cy.searchItem('eyeliner', this.testdata.eyeliner);
})
})

//Buscar una Sombra
it('search eyeshadow', ()  => {
  cy.fixture('index').then(function (testdata) {
    this.testdata = testdata
  cy.searchItem('eyeshadow', this.testdata.eyeshadow);
  cy.searchColor('g2g');
})
})

// Añadir todos los productos al carrito
it('search gloss', () => { 
  cy.fixture('index').then(function (testdata) {
    this.testdata = testdata
    
    cy.searchItem('gloss', this.testdata.gloss);
    cy.searchColor('chuckie');
    let addButton = cy.get(':nth-child(2) > .product-add-to-cart > :nth-child(1) > .flex-grow > .btn')
    addButton.click()
    cy.get('.header-cart__close').click()
    cy.get('.header-search-icon__icon').click()
    cy.searchItem('lipstick', this.testdata.lipstick);
    cy.searchColor('tongue tied');
    addButton.click()
    cy.get('.header-cart__close').click()
    cy.get('#header-search-icon').click()
    cy.searchItem('eyeliner', this.testdata.eyeliner);
    addButton.click()
    cy.get('.header-cart__close').click()
    cy.get('#header-search-icon').click()
    cy.searchItem('eyeshadow', this.testdata.eyeshadow);
    cy.searchColor('g2g');
    addButton.click()

  })
  })



})