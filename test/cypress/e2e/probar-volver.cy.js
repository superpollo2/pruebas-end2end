describe('Prueba para crear una queja', () => {
    it('Entra a la creación de cada tipo de queja y le da clic en volver', () => {
      cy.visit('http://localhost:3000/');
      cy.wait(2000);
      /*Mal comportamiento */
      cy.get('.swal2-confirm').click();
      cy.wait(2000);
      cy.contains('button', 'Añadir PQRS').click();
      cy.wait(2000);
      cy.contains('button','Queja').click();
      cy.wait(2000);
      cy.contains('button','Mal').click();
      cy.wait(2000);
      cy.contains('button','Continuar').click();
      cy.wait(2000);
      cy.contains('button','Volver').click();
      cy.wait(2000);
      /*Estado del vehículo*/
      cy.get('.swal2-confirm').click();
      cy.wait(2000);
      cy.contains('button', 'Añadir PQRS').click();
      cy.wait(2000);
      cy.contains('button','Queja').click();
      cy.wait(2000);
      cy.contains('button','Estado').click();
      cy.wait(2000);
      cy.contains('button','Continuar').click();
      cy.wait(2000);
      cy.contains('button','Volver').click();
      cy.wait(2000);
      /*Cobro inadecuado*/
      cy.get('.swal2-confirm').click();
      cy.wait(2000);
      cy.contains('button', 'Añadir PQRS').click();
      cy.wait(2000);
      cy.contains('button','Queja').click();
      cy.wait(2000);
      cy.contains('button','Cobro').click();
      cy.wait(2000);
      cy.contains('button','Continuar').click();
      cy.wait(2000);
      cy.contains('button','Volver').click();
      cy.wait(2000);
      /*Otro*/
      cy.get('.swal2-confirm').click();
      cy.wait(2000);
      cy.contains('button', 'Añadir PQRS').click();
      cy.wait(2000);
      cy.contains('button','Queja').click();
      cy.wait(2000);
      cy.contains('button','Otro').click();
      cy.wait(2000);
      cy.contains('button','Continuar').click();
      cy.wait(2000);
      cy.contains('button','Volver').click();
      cy.wait(2000);
    });
  });
  