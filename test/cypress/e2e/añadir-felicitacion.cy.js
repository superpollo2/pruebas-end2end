describe('Prueba para crear una felicitación', () => {
    it('Añade una felicitacion', () => {
      cy.visit('http://localhost:3000/');
      cy.wait(2000);
      cy.get('.swal2-confirm').click();
      cy.contains('button', 'Añadir PQRS').click();
      cy.wait(2000);
      cy.contains('button','Felicitación').click();
      cy.wait(2000);
      cy.get('textarea[name="descripcionPqrs"]').type('Felicidades a su equipo de atención al cliente. Resolvieron mi problema de manera rápida y eficiente. Su dedicación a la satisfacción del cliente es evidente y apreciada.');
      cy.wait(2000);
      cy.contains('button','Enviar').click();
  
    });
  });
  