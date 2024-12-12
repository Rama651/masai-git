describe('hooks', () => {
  beforeEach(()=>{
    cy.visit('https://the-internet.herokuapp.com/login')
  })

  afterEach(() => {
    cy.clearCookies()
  })

  it('', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('.fa').should('be.visible')
  });

  it('', () => {
    cy.get('input[id=username]').contains('Enter your email')
  });

});