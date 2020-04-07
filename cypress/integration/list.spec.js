describe('On List Page', function() {
  const URL = 'list';

  const setStub = () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'tags',
      response: [
        {
          id: 1,
          code: 'terror',
          name: 'Terror',
        },
      ],
    });

    cy.route({
      method: 'GET',
      url: 'rooms',
      response: [
        {
          id: '1',
          name: 'room 1',
          description: 'description room 1',
          likeCount: 5,
          commentsCount: 0,
          price: 30,
          isGroupPrice: false,
          isEditorsChoice: false,
          image: 'fake_imgs/room.jpg',
          tags: [1, 2],
        },
        {
          id: '2',
          name: 'room 2',
          description: 'description room 2',
          like_count: 0,
          comment_count: 11,
          price: 150,
          isGroupPrice: true,
          isEditorsChoice: true,
          image: 'fake_imgs/room.jpg',
          category_id: [3],
        },
      ],
    });
  };

  const setAppState = () => {
    setStub();
    cy.visit(URL);
  };

  it('User writes on search text input', function() {
    cy.visit(URL);
    cy.get('#search')
      .type('room 3')
      .should('have.value', 'room 3');
  });

  it('User clicks the "room 1" item link', function() {
    setAppState();
    cy.contains('room 1').click({ force: true });
    cy.url().should('include', 'detail/1');
  });

  it('User sees that list items are rendered', function() {
    setAppState();
    cy.contains('room 1');
    cy.contains('room 2');
  });
});
