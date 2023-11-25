describe('Prueba para crear una sugerencia', () => {
    it('Añade una sugerencia', () => {
      cy.visit('http://localhost:3000/');
      cy.wait(2000);
      cy.get('.swal2-confirm').click();
      cy.contains('button', 'Añadir PQRS').click();
      cy.wait(2000);
      cy.contains('button','Sugerencia').click();
      cy.wait(2000);
      cy.get('textarea[name="descripcionPqrs"]').type('Sería beneficioso contar con una opción de notificación para informar a los conductores sobre retrasos inevitables. Esto mejoraría la comunicación durante los imprevistos.');
      cy.wait(2000);
      cy.contains('button','Enviar').click();
  
    });
  });
  