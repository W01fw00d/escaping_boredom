describe('Try to navigate to unknown url', function() {
  it('User checks that not found message is rendered', function() {
    cy.visit('http://localhost:3000/#/fake');
    cy.contains('not found');
  });
});
