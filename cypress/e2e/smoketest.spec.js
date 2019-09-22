describe('Smoke Test', () => {
  it('can handle the truth', () => {
    cy.visit('/');
    cy.findByText('Hello world!').should('exist');
  });
});
