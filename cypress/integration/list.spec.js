describe('On List Page', function() {
  const URL = 'list';

  it('User sees that list items are rendered', function() {
    cy.visit(URL);
    cy.contains('room 1');
    cy.contains('room 2');
  });

  it('User clicks the "room 1" item link', function() {
    cy.visit(URL);
    cy.contains('room 1').click({ force: true });
    cy.url().should('include', 'detail/1');
  });

  it('User writes on search text input', function() {
    cy.visit(URL);
    cy.get('#search')
      .type('room 3')
      .should('have.value', 'room 3');
  });

  it('User navigates to root', function() {
    cy.visit('');
    cy.url().should('include', URL);
  });
});
