describe('On List Page, navigate', function() {
  it('User checks that list items are rendered', function() {
    cy.visit('http://localhost:3000/#/list');
    cy.contains('room 1');
    cy.contains('room 2');
  });

  it('User clicks the "room 1" item link', function() {
    cy.visit('http://localhost:3000/#/list');
    cy.contains('room 1').click({ force: true });
    cy.url().should('include', '/detail/1');
  });
});

describe('On List Page, interact', function() {
  it('User writes on search text input', function() {
    cy.visit('http://localhost:3000/#/list');
    cy.get('#search')
      .type('room 3')
      .should('have.value', 'room 3');
  });
});
