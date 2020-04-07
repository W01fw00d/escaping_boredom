describe('On Detail Page, navigate', function() {
  it('User checks that list item is rendered', function() {
    cy.visit('http://localhost:3000/#/detail/1');
    cy.contains('room 1');
  });

  it('User clicks on back button', function() {
    cy.visit('http://localhost:3000/#/detail/1');
    cy.get('#back').click();
    cy.url().should('include', '/list');
  });
});
