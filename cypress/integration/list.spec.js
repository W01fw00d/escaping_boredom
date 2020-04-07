describe('On List Page', function() {
  it('User checks that list items are rendered', function() {
    cy.visit('http://localhost:3000/#/list');
    cy.contains('room 1');
    cy.contains('room 2');
    //expect(true).to.equal(true);
  });

  it('User clicks the "room 1" item link', function() {
    cy.visit('http://localhost:3000/#/list');
    cy.contains('room 1').click({ force: true });
    cy.url().should('include', '/detail/1');
  });
});
