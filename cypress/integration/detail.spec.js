describe('On Detail Page, navigate', function() {
  const URL = 'detail/1';

  it('User checks that list item is rendered', function() {
    cy.visit(URL);
    cy.contains('room 1');
  });

  it('User clicks on back button', function() {
    cy.visit(URL);
    cy.get('#back').click();
    cy.url().should('include', '/list');
  });
});
