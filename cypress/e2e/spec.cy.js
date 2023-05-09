
describe('Search MakeUp', () => {
let locators;

  beforeEach(() => {
  cy.visit('/')

})  

  /// style="font-family: 'Space Mono', Geneva, Tahoma, Verdana, sans-serif; font-weight: 400; font-size: 22px;


//Buscar una Sombra
it('search eyeshadow', ()  => {
  cy.fixture('index').then(function (testdata) {
    this.testdata = testdata
  cy.searchItem('eyeshadow', this.testdata.eyeshadow)
  cy.searchColor(this.testdata.glossColor, this.testdata.glossColorElement)
})

})

/*
// Buscar un Gloss
it('search gloss', () => { 
  cy.fixture('index').then(function (testdata) {
    this.testdata = testdata
    cy.searchItem('gloss', this.testdata.gloss);
  })

  })

// Buscar un Labial 
it('search lipstick', () => {
  cy.fixture('index').then(function (testdata) {
    this.testdata = testdata
    cy.searchItem('lipstick', this.testdata.lipstick);
})

})

//Buscar un Delineador
it('search eyeliner', ()  => {
  cy.fixture('index').then(function (testdata) {
    this.testdata = testdata
  cy.searchItem('eyeliner', this.testdata.eyeliner)
})

})

//Buscar una Sombra
it('search eyeshadow', ()  => {
  cy.fixture('index').then(function (testdata) {
    this.testdata = testdata
  cy.searchItem('eyeshadow', this.testdata.eyeshadow)
  cy.searchColor(this.testdata.glossColor, this.testdata.glossColorElement)
})

})
*/


})