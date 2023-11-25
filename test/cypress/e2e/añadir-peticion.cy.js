describe('Prueba para crear una petición', () => {
    it('Añade una petición', () => {
      cy.visit('http://localhost:3000/');
      cy.wait(2000);
      cy.get('.swal2-confirm').click();
      cy.contains('button', 'Añadir PQRS').click();
      cy.wait(2000);
      cy.contains('button','Petición').click();
      cy.wait(2000);
      cy.get('textarea[name="descripcionPqrs"]').type('Me gustaría que mi tarifa de mi último viaje se revise ya que me cobraron algo diferente a lo que decía la app.');
      cy.wait(2000);
      cy.contains('button','Enviar').click();
  
    });
  });
  